import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/servicioYoutube/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _youtube:YoutubeService) { 
    
    this._youtube.obtenerVideos().subscribe((resp:any)=> {
      //this.misVideos = resp.items;
      console.log(resp);
  
    });
  }


  ngOnInit() {
  }
  
}