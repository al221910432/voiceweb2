import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router'

import { DireccionI } from '../../modelos/direccion.interface'

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  
  

  constructor(private api:ApiService, private router:Router) { }

  direcciones: DireccionI[] = [];

  ngOnInit(): void {
    this.api.getAllAddresses().subscribe(data =>{
      this.direcciones = data 
    })
  }

  editarDireccion(id:number){
    this.router.navigate(['editardireccion',id])
  }

  nuevaDireccion(){
    this.router.navigate(['nuevadireccion']);
  }

}