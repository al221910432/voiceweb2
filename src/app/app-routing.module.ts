import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { OrdenesComponent} from './vistas/ordenes/ordenes.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component'
import { ComprasComponent} from './vistas/compras/compras.component'
import { DireccionComponent } from './vistas/direcciones/direccion.component'
import { EditarUsuarioComponent } from './vistas/editarusuario/editarusuario.component'
import { EditarDireccionComponent } from './vistas/editardireccion/editardireccion.component'
import { EditarOrdenComponent } from './vistas/editarorden/editarorden.component'
import { NuevaDireccionComponent} from './vistas/nuevadireccion/nuevadireccion.component'


const routes: Routes = [
  { path:'' , redirectTo:'login' , pathMatch:'full'},
  { path:'login', component:LoginComponent },
  { path:'dashboard', component:DashboardComponent},
  { path:'nuevo', component:NuevoComponent},
  { path:'editar/:id', component:EditarComponent},
  { path:'ordenes', component:OrdenesComponent},
  { path:'usuarios', component:UsuariosComponent},
  { path:'compras', component:ComprasComponent},
  { path:'direcciones', component:DireccionComponent},
  { path:'editarusuario/:id', component:EditarUsuarioComponent},
  { path:'editardireccion/:id', component:EditarDireccionComponent},
  { path:'editarorden/:id', component:EditarOrdenComponent},
  { path:'nuevadireccion', component:NuevaDireccionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,NuevoComponent,EditarComponent,OrdenesComponent,UsuariosComponent,ComprasComponent,DireccionComponent,EditarUsuarioComponent,EditarDireccionComponent,EditarOrdenComponent,NuevaDireccionComponent]
