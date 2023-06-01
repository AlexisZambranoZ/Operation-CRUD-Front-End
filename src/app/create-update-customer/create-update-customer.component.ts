import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Cliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-create-update-customer',
  templateUrl: './create-update-customer.component.html',
  styleUrls: ['./create-update-customer.component.css']
})
export class CreateUpdateCustomerComponent {

  nombre: string = "";
  email: string = "";
  password: string = "";
  
  constructor(private http: HttpClient,
    private usersService: UsersService) { }

    guardarCliente() {
      console.log("Ejecutando");
      const cliente = {
        nombre: this.nombre,
        email: this.email,
        password: this.password
      };
    
      this.usersService.crearCliente(cliente).subscribe(
        respuesta => {
          console.log('Cliente creado:', respuesta);
        },
        error => {
          console.error('Error al crear el cliente:', error);
        }
      );
    }
    
}
