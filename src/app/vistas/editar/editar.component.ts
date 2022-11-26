import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductoI } from '../../modelos/producto.interface'
import { ApiService } from '../../servicios/api/api.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private api:ApiService, private router:Router) { }

 datosProducto!: ProductoI ; 

 
 editarForm = new FormGroup({
  name:  new FormControl('') ,
  description: new FormControl(''),
  image: new FormControl(''),
  price: new FormControl(''),
})

  ngOnInit(): void {
    let productoId = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleProduct(productoId).subscribe((data) =>{
      this.datosProducto = data
      this.editarForm.setValue({
      'name' : this.datosProducto.name,
        'description':this.datosProducto.description,
        'image': this.datosProducto.image,
        'price': this.datosProducto.price,
      });
    })
    
  }

  getToken(){
    return localStorage.getItem('token')
  }

  postForm(form:ProductoI | any){
    let productoId = this.activerouter.snapshot.paramMap.get('id');
    this.api.putProduct(form,productoId).subscribe(data=>{
      console.log(data)
    }) 
  }

  eliminar(){
    let productoId = this.activerouter.snapshot.paramMap.get('id');
    let datos: ProductoI | any= this.editarForm.value
    this.api.deleteProduct(datos,productoId).subscribe(data=>{
      console.log(data)
    })
  }

  salir(){
    this.router.navigate(['dashboard'])
  }
}
