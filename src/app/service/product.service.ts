import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { feedback } from '../../interface/feedback';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getproducts(){
    const url = 'https://raw.githubusercontent.com/youmansoor/portfolio/refs/heads/master/projects.json';
    return this.http.get(url);

  }
  gettechnologies(){
    const url = 'https://raw.githubusercontent.com/youmansoor/portfolio/refs/heads/master/technologies.json';
    return this.http.get(url);
  }
  getjourney(){
    const url = 'https://raw.githubusercontent.com/youmansoor/portfolio/refs/heads/master/journey.json';
    return this.http.get(url);
  }
  url = 'http://localhost:3000/feedbacks';
  getfeedback():Observable<feedback[]>{
    return this.http.get<feedback[]>(this.url);
  }
  postfeedback(user:feedback):Observable<feedback[]>{
    return this.http.post<feedback[]>(this.url, user);
  }
}
