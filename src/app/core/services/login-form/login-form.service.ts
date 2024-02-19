import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  formLogin: FormGroup;

  constructor() {
    this.formLogin = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }

  getControl(name: string): FormControl {
    const control = this.formLogin.get(name);
    if (!control) {
      throw new Error(`Control ${name} not found`);
    }

    return control as FormControl;
  }

  validLogin(): boolean {
    const login = this.formLogin.get('login')?.value;
    const password = this.formLogin.get('password')?.value;

    //check if has login in localStorage
    const user = localStorage.getItem('album-login');
    if (!user) {
      //save login in localStorage
      localStorage.setItem('album-login', JSON.stringify({ login, password }));
      return true;
    }

    const userObj = JSON.parse(user);
    if (userObj.login === login && userObj.password === password) {
      return true;
    }

    return false;
  }
}
