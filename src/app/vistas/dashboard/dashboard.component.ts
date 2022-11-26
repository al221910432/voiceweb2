import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router'

import { ProductI } from '../../modelos/product.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  

  constructor(private api:ApiService, private router:Router) { }

  productos: ProductI[] = [];

  ngOnInit(): void {
    this.api.getAllProduct().subscribe(data =>{
      this.productos = data
    })
  }

  editarProducto(id:number){
    this.router.navigate(['editar',id])
  }

  nuevoProducto(){
    this.router.navigate(['nuevo']);
  }



}
