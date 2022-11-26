import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { DireccionI } from '../../modelos/direccion.interface'
import { ApiService } from '../../servicios/api/api.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-editardireccion',
  templateUrl: './editardireccion.component.html',
  styleUrls: ['./editardireccion.component.css']
})
export class EditarDireccionComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private api:ApiService) { }

 datosDireccion!: DireccionI ; 

 
 editarForm = new FormGroup({
  suburb:  new FormControl('') ,
  street: new FormControl(''),
  street_numer: new FormControl(''),
  home_number: new FormControl(''),
  references: new FormControl(''),
  municipality_id: new FormControl(''),
})

  ngOnInit(): void {
    let direccionId = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleAddress(direccionId).subscribe((data) =>{
      this.datosDireccion = data
      this.editarForm.setValue({
      'suburb' : this.datosDireccion.suburb,
        'street':this.datosDireccion.street,
        'street_numer': this.datosDireccion.street_numer,
        'home_number': this.datosDireccion.home_number,
        'references': this.datosDireccion.references,
        'municipality_id': this.datosDireccion.municipality_id,
      });
    })
    
  }

  getToken(){
    return localStorage.getItem('token')
  }

  postForm(form:DireccionI | any){
    let direccionId = this.activerouter.snapshot.paramMap.get('id');
    this.api.putAddress(form,direccionId).subscribe(data=>{
      console.log(data)
    }) 
  }

  eliminar(){
    let direccionId = this.activerouter.snapshot.paramMap.get('id');
    let datos: DireccionI | any= this.editarForm.value

    this.api.deleteAddress(datos,direccionId).subscribe(data=>{
      console.log(data)
    })
  }
}
