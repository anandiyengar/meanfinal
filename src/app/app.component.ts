import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [];
  title = 'meanapp-final';

  constructor(
    private http: HttpClient
  ){
    this.http.get<any>("/api/user").subscribe((user)=>{
      this.posts = user
      console.log(user)
    })
  }

}
