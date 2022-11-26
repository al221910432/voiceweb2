import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductI } from '../../modelos/product.interface';
import { ProductoI } from '../../modelos/producto.interface'
import { OrdenesI } from '../../modelos/ordenes.interface'
import { UsuariosI } from '../../modelos/usuarios.interface'
import { ComprasI } from '../../modelos/compras.interface'
import { DireccionI } from '../../modelos/direccion.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://192.168.0.12:8000/api/"
  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "login"
    return this.http.post<ResponseI>(direccion,form);
  }

/**Products */
  getAllProduct():Observable<ProductI[]>{
   
    let direccion = this.url + "product";
    return this.http.get<ProductI[]>(direccion);
  }

  getSingleProduct(id:any):Observable<ProductoI>{
    let direccion = this.url+ "product_show/" + id;
    return this.http.get<ProductoI>(direccion)
  }

  putProduct(form:ProductoI, id:any):Observable<ResponseI>{
    let direccion = this.url + 'product_update/' + id
    return this.http.put<ResponseI>(direccion,form)
  }

  deleteProduct(form:ProductoI, id:any):Observable<ResponseI>{
    let direccion = this.url + "product_delete/" + id
    let Options = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete<ResponseI>(direccion,Options)
  }

  postProduct(form:ProductI):Observable<ResponseI>{
  let direccion = this.url + 'product_store'
    return this.http.post<ResponseI>(direccion,form)
  }


  /**Orders */ 
  getAllOrders():Observable<OrdenesI[]>{
   
    let direccion = this.url + "order";
    return this.http.get<OrdenesI[]>(direccion);
  }

  getSingleOrder(id:any):Observable<OrdenesI>{
    let direccion = this.url+ "order_show/" + id;
    return this.http.get<OrdenesI>(direccion)
  }

  putOrder(form:OrdenesI, id:any):Observable<ResponseI>{
    let direccion = this.url + 'order_update/' + id
    return this.http.put<ResponseI>(direccion,form)
  }

  


  /**Users */

  getAllUsers():Observable<UsuariosI[]>{
    let direccion = this.url + "users";
    return this.http.get<UsuariosI[]>(direccion)
  }

  getSingleUser(id:any):Observable<UsuariosI>{
    let direccion = this.url+ "users/" + id;
    return this.http.get<UsuariosI>(direccion)
  }

  putUser(form:UsuariosI, id:any):Observable<ResponseI>{
    let direccion = this.url + 'users_edit/' + id
    return this.http.put<ResponseI>(direccion,form)
  }

  deleteUser(form:UsuariosI, id:any):Observable<ResponseI>{
    let direccion = this.url + "users_delete/" + id
    let Options = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete<ResponseI>(direccion,Options)
  }

  

  /**Shoppings */
  getAllShopping():Observable<ComprasI[]>{
    let direccion = this.url + "shopping";
    return this.http.get<ComprasI[]>(direccion)
  }

  /**Addresses */

  getAllAddresses():Observable<DireccionI[]>{
    let direccion = this.url + "addresses";
    return this.http.get<DireccionI[]>(direccion)
  }

  getSingleAddress(id:any):Observable<DireccionI>{
    let direccion = this.url+ "addresses_show/" + id;
    return this.http.get<DireccionI>(direccion)
  }

  putAddress(form:DireccionI, id:any):Observable<ResponseI>{
    let direccion = this.url + "addresses_update/" + id
    return this.http.put<ResponseI>(direccion,form)
  }

  deleteAddress(form:DireccionI, id:any):Observable<ResponseI>{
    let direccion = this.url + "addresses_delete/" + id
    let Options = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete<ResponseI>(direccion,Options)
  }

  postAddress(form:DireccionI):Observable<ResponseI>{
    let direccion = this.url + 'addresses_store'
      return this.http.post<ResponseI>(direccion,form)
    }



}
