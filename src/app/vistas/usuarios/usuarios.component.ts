import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router'

import { UsuariosI } from '../../modelos/usuarios.interface'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  
  

  constructor(private api:ApiService, private router:Router) { }

  usuarios: UsuariosI[] = [];

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(data =>{
      this.usuarios = data 
    })
  }

  editarUsuario(id:number){
    this.router.navigate(['editarusuario',id])
  }

}
