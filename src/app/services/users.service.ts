import { Injectable } from '@angular/core';
import { environment } from 'config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = environment.apiUrl;
  
  constructor() { }
 
  
}
