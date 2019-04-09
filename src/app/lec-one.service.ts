import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LecOneService {

  public url: string;

  constructor(private http: HttpClient) { 

  }

  public setUrl(path:string){
      this.url = path;
  }

  public getUrl(){
    return this.http.get(this.url);
  }
}
