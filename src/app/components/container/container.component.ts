import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private router: Router) { }
  isLoggedIn = '';

  ngOnInit() {
    this.isLoggedIn =  localStorage.getItem('isLoggedIn') || '';
  }
}