import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-update-customer',
  templateUrl: './create-update-customer.component.html',
  styleUrls: ['./create-update-customer.component.css']
})
export class CreateUpdateCustomerComponent {

  nombre: string = "";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient) { }

  guardarCliente() {
    console.log("Ejecutando");
    const cliente = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/usuarios', cliente)
    .subscribe(
      respuesta => {
        console.log('Cliente creado:', respuesta);
        // Aquí puedes realizar acciones adicionales, como mostrar un mensaje de éxito o redirigir al usuario a otra página
      },
      error => {
        console.error('Error al crear el cliente:', error);
      }
    );
  
  }
}
