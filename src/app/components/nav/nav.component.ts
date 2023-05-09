import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  isLoggedIn = '';

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') || '';

  }

  goLogin() {
    //  this.isLoggedIn = true;
    this.router.navigate(['/login']);
    // localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
  }

  goRegister() {
    this.router.navigate(['/register']);
  }

  goServices() {
    this.router.navigate(['/container']);
  }
  
  cerrar(){
    localStorage.setItem('isLoggedIn', String(false));
    
  }

}