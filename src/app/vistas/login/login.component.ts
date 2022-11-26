import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor( private api:ApiService, private router:Router ) { }

  errorStatus:boolean = false;
  errorMensaje:any = "" 

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard'])
    }
  }

  onLogin(form:any){
    this.api.loginByEmail(form).subscribe(data => {
      let dataResponse:ResponseI = data;
      if(dataResponse.Mensaje == "¡Usuario logeado exitosamente. Bienvenido!"){
        localStorage.setItem("token", dataResponse.access_token);
        this.router.navigate(['dashboard']);
        
      }else {
        this.errorStatus = true;
        this.errorMensaje = dataResponse.access_token.errorMensaje;

      }
    });
  }

}
