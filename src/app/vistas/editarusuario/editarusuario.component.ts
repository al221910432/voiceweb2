import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UsuariosI } from '../../modelos/usuarios.interface'
import { ApiService } from '../../servicios/api/api.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private api:ApiService) { }

 datosUsuario!: UsuariosI ; 

 
 editarForm = new FormGroup({
  name:  new FormControl('') ,
  first_last_name: new FormControl(''),
  second_last_name: new FormControl(''),
  email: new FormControl(''),
  rol_id: new FormControl(''),
})

  ngOnInit(): void {
    let usuarioId = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleUser(usuarioId).subscribe((data) =>{
      this.datosUsuario = data
      this.editarForm.setValue({
      'name' : this.datosUsuario.name,
        'first_last_name':this.datosUsuario.first_last_name,
        'second_last_name': this.datosUsuario.second_last_name,
        'email': this.datosUsuario.email,
        'rol_id': this.datosUsuario.rol_id
      });
    })
    
  }

  getToken(){
    return localStorage.getItem('token')
  }

  postForm(form:UsuariosI | any){
    let usuarioId = this.activerouter.snapshot.paramMap.get('id');
    this.api.putUser(form,usuarioId).subscribe(data=>{
      console.log(data)
    }) 
  }

  eliminar(){
    let usuarioId = this.activerouter.snapshot.paramMap.get('id');
    let datos: UsuariosI | any= this.editarForm.value

    this.api.deleteUser(datos,usuarioId).subscribe(data=>{
      console.log(data)
    })
  }
}
