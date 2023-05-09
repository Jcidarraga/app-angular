import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-form-servicio',
  templateUrl: './form-servicio.component.html',
  styleUrls: ['./form-servicio.component.css']
})
export class FormServicioComponent implements OnInit {

  constructor(private router: Router) { }

  isLoggedIn = '';

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') || '';

  }

  pedirServicio(){
    this.router.navigate(['/messageServicio']);
  }
}
