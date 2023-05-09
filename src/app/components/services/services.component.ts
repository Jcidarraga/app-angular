import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }

  isLoggedIn = '';

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') || '';

  }

  pedirServicio(){
    this.router.navigate(['/pedirServicio']);
  }
}
