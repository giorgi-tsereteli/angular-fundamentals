import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };

  signInError: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  signIn() {
    this.signInError = false; // reset error state each time they try to sign in
    this.userService.signIn(this.credentials).subscribe({
      // why user returns observable??
      next: () => this.router.navigate(['/catalog']),
      error: () => (this.signInError = true), // this boolean value determines if the error message is displayed in html
    });
  }
}
