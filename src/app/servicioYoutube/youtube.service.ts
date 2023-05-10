import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private api_key: string = "AIzaSyD8jMTlEmdPZGfT9HTfhZR6CjVRgd3EsYQ";
  private url: string = "https://www.googleapis.com/youtube/v3";
  private canal: string = "UCc8o0cT4aD3n1Bw3k5GIdQQ";

  constructor(private _http: HttpClient) { }

  obtenerVideos() {
    const parametros = new HttpParams().set('part','snippet').set('channelId', this.canal).set('maxResult','1').set('key', this.api_key)
    let vinculo = `${this.url}/search`;
    return this._http.get(vinculo, {params:parametros}).pipe(map(resp=>resp));
  }
}
