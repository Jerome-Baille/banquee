import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  registerUser(firstName: string, lastName: string, email: string, password: string){
    console.log({firstName, lastName, email, password});
  }

  loginUser(email: string, password: string){
    console.log({email, password});
  }
}
