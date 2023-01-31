import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable()
export class UserService{
    private url:string='http://localhost:3000/auth/create';
    constructor(private httpClient:HttpClient){}

    createUser(user_data:any){
        let data={
            firstName:user_data.firstName,
            lastName:user_data.lastName,
            genre:user_data.genre,
            email:user_data.email,
            city:user_data.city,
            codePostal:user_data.codePostal,
            password:user_data.password,
            confirm:user_data.confirm
        }
        return this.httpClient.post(this.url,data);
    }
}