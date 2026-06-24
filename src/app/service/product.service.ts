import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { feedback } from '../../interface/feedback';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "https://script.google.com/macros/s/AKfycbzLXjTXufxnXeD_8Ae4Xfg-K0RThCl6ZC7aLHO3xRgHR6SbtOucTw2gNX_pUKWVrVM/exec";
  constructor(private http:HttpClient) { }

  getproducts(){
    const url = 'https://raw.githubusercontent.com/youmansoor/portfolio/refs/heads/file-data/projects.json';
    return this.http.get(url);

  }
  gettechnologies(){
    const url = 'https://raw.githubusercontent.com/youmansoor/portfolio/refs/heads/file-data/technologies.json';
    return this.http.get(url);
  }
  getjourney(){
    const url = 'https://raw.githubusercontent.com/youmansoor/portfolio/refs/heads/file-data/journey.json';
    return this.http.get(url);
  }
  // getfeedback():Observable<feedback[]>{
  //   return this.http.get<feedback[]>(this.url);
  // }
  postfeedback(user:feedback):Observable<feedback[]>{
    return this.http.post<feedback[]>(this.url, user);
  }
}
