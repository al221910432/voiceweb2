import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ProductoI } from '../../modelos/producto.interface'
import { ApiService } from '../../servicios/api/api.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nuevoForm = new FormGroup({
    name:  new FormControl('') ,
    description: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
  })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void { 
  }

  postForm(form:ProductoI | any){
    this.api.postProduct(form).subscribe(data=>{
      console.log(data)
    })
  }

  salir(){
    this.router.navigate(['dashboard'])
  }

}
