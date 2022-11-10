import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

LoginUser(user:User){
  console.log(user)
  return this.http.post<any>(`${environment.BasedUrl}/User/login`,user)
}


}
