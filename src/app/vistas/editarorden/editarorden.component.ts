import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { OrdenesI } from '../../modelos/ordenes.interface'
import { ApiService } from '../../servicios/api/api.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-editarorden',
  templateUrl: './editarorden.component.html',
  styleUrls: ['./editarorden.component.css']
})
export class EditarOrdenComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private api:ApiService) { }

 datosOrdenes!: OrdenesI ; 

 
 editarForm = new FormGroup({
  cantidad:  new FormControl('') ,
  total: new FormControl(''),
})

  ngOnInit(): void {
    let ordenId = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleOrder(ordenId).subscribe((data) =>{
      this.datosOrdenes = data
      this.editarForm.setValue({
      'cantidad' : this.datosOrdenes.cantidad,
        'total':this.datosOrdenes.total,
      });
    })
    
  }

  getToken(){
    return localStorage.getItem('token')
  }

  postForm(form:OrdenesI | any){
    let ordenId = this.activerouter.snapshot.paramMap.get('id');
    this.api.putOrder(form,ordenId).subscribe(data=>{
      console.log(data)
    }) 
  }

}
