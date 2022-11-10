import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) {

   }
   AddUser(u:User){

    return this.http.post<any>(`${environment.BasedUrl}/User/ps`,u)
  }
}
