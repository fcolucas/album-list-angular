import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormService } from 'src/app/core/services/login-form/login-form.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  constructor(
    public loginFormService: LoginFormService,
    private router: Router
  ) {}

  submit() {
    const valid = this.loginFormService.validLogin();
    if (!valid) {
      alert('Usuário ou senha inválidos!');
      return;
    }

    this.router.navigate(['/album']);
  }
}
