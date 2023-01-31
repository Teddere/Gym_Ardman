import {Injectable} from'@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ContactService{
    url='http://localhost:3000/contact'
    constructor(private httpClient:HttpClient){}

    addMessage(contact_data:any){
       let data={
            firstName:contact_data.firstName,
            lastName:contact_data.lastName,
            email:contact_data.email,
            title:contact_data.title,
            message:contact_data.message
        }
        return this.httpClient.post(this.url,data);
    }
}