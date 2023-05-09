import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-message-solicitud',
  templateUrl: './message-solicitud.component.html',
  styleUrls: ['./message-solicitud.component.css']
})
export class MessageSolicitudComponent implements OnInit {

  ngOnInit(): void {
  
  }
  
  constructor(private router: Router) { }
  
  isLoggedIn = false;

  goContainer() {
    this.router.navigate(['/container']);
  }

}
