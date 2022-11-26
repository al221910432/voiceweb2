import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { DireccionI } from '../../modelos/direccion.interface'
import { ApiService } from '../../servicios/api/api.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-nuevadireccion',
  templateUrl: './nuevadireccion.component.html',
  styleUrls: ['./nuevadireccion.component.css']
})
export class NuevaDireccionComponent implements OnInit {

    nuevoForm = new FormGroup({
        suburb:  new FormControl('') ,
        street: new FormControl(''),
        street_numer: new FormControl(''),
        home_number: new FormControl(''),
        references: new FormControl(''),
      })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void { 
  }

  postForm(form:DireccionI | any){
    this.api.postAddress(form).subscribe(data=>{
      console.log(data)
    })
  }

  salir(){
    this.router.navigate(['direcciones'])
  }

}
