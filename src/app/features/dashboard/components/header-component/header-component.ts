import { Component, inject, Input, input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header-component',
  styleUrl: './header-component.css',
  templateUrl: './header-component.html',
})
export class HeaderComponent {
  name: string | null = localStorage.getItem("username");

  private readonly _router = inject(Router);
  onLogOut(){
    this._router.navigate(['/dashboard']);
    localStorage.clear();
    window.location.reload();
  }
}
