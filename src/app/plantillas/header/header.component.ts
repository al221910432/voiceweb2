import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verUsuarios(){
    this.router.navigate(['usuarios']);
  }

  verOrdenes(){
    this.router.navigate(['ordenes']);
  }

  verDirecciones(){
    this.router.navigate(['direcciones']);
  }

}
