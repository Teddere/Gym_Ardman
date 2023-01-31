import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService{

     isAuth=false;
    storageKey:string='user-jwt';
    url='http://localhost:3000/auth/login';
    httpOptions={
        headers: new HttpHeaders({
          'content-Type':'application/json',
          'Authorization': `JWT ${this.getToken()}`
        })
      }
    constructor(private httpClient:HttpClient){}
    setToken(token:string){
        localStorage.setItem(this.storageKey,token);
        this.isAuth=true;
    }
    getToken(){
        return localStorage.getItem(this.storageKey);
    }
    isLogged(){
       return this.getToken() !==null;
    }
    logout(){
        localStorage.removeItem(this.storageKey);
        this.isAuth=false;
    }
    signIn(payload:any){
        let body={
            email:payload.email,
            password:payload.password,
          }
          return this.httpClient.post(this.url,body);
    }
    signOut(){
        this.isAuth=false;
    }
}