import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserLoginModel, UserRegistrationModel, UserResponseModel } from '../../models/user.model';
import { Auth } from '../../services/auth';

@Component({
  imports: [ RouterLink, ReactiveFormsModule ],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  private readonly _router = inject(Router);
  private readonly _authService = inject(Auth);

  loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  onSubmit(){
    if (this.loginForm.valid){
      const userLoginModel: UserRegistrationModel = {
        name: this.loginForm.value.name!,
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!
      }

      this._authService.register(userLoginModel).subscribe({
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
