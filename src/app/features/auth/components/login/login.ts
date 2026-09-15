import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserLoginModel, UserResponseModel } from '../../models/user.model';
import { Auth } from '../../services/auth';

@Component({
  imports: [RouterLink, ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private readonly _router = inject(Router);
  private readonly _authService = inject(Auth);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  onSubmit(){
    if (this.loginForm.valid){
      const userLoginModel: UserLoginModel = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!
      }

      this._authService.login(userLoginModel).subscribe({
        next: (response: UserResponseModel) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.id.toString());
          localStorage.setItem('username', response.name);
          this._router.navigate(['/dashboard'])
        },
        error: (error) => {
          console.error('Auth exception: ', error);
        }
      })
    }
  }
}
