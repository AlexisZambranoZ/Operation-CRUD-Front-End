import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'config';
import { Observable, tap } from 'rxjs';
import { Cliente } from 'src/interfaces/cliente';



@Injectable({
  providedIn: 'root'
})


export class UsersService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  crearCliente(cliente: Cliente): Observable<any> {
    return this.http.post(`${this.url}/usuarios`, cliente).pipe(
    /*   tap(respuesta => {
        console.log('Cliente creado:', respuesta);
      }) */
    );
  }
}

