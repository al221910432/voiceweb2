import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router'

import { OrdenesI } from '../../modelos/ordenes.interface'

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  
  

  constructor(private api:ApiService, private router:Router) { }

  ordenes: OrdenesI[] = [];

  ngOnInit(): void {
    this.api.getAllOrders().subscribe(data =>{
      this.ordenes = data 
    })
  }

  editarOrden(id:number){
    this.router.navigate(['editarorden',id])
  }

}
