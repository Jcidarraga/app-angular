import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

  goLogin() {
    //  this.isLoggedIn = true;
    this.router.navigate(['/login']);
    // localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
  }

}
