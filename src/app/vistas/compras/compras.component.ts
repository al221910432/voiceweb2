import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router'

import { ComprasI } from '../../modelos/compras.interface'

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  
  

  constructor(private api:ApiService, private router:Router) { }

  compras: ComprasI[] = [];

  ngOnInit(): void {
    this.api.getAllShopping().subscribe(data =>{
      this.compras = data 
    })
  }

}