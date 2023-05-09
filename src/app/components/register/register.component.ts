import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

  goLogin() {
    //  this.isLoggedIn = true;
    this.router.navigate(['/login']);
    // localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
  }
}
