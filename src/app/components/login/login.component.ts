import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  
  }
  
  constructor(private router: Router) { }
  
  isLoggedIn = false;

  goRegister() {
    this.router.navigate(['/register']);
  }
  goForgotPass() {
    this.router.navigate(['/forgotPass']);
  }
  goContainer() {
    this.isLoggedIn = !this.isLoggedIn;
    this.router.navigate(['/container']);
    localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
  }

}