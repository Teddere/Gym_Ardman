import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactService:ContactService) { }
  messageStatus:any;
  ngOnInit(): void {
  }
  onSubmitContat(formContact:NgForm){
    if(formContact.valid && formContact.submitted){
      const contact_data={
        firstName:formContact.value['contact.firstName'],
        lastName:formContact.value['contact.lastName'],
        email:formContact.value['contact.email'],
        title:formContact.value['contact.title'],
        message:formContact.value['contact.message']
      }
      this.contactService.addMessage(contact_data).subscribe(
        data=>{
          this.messageStatus=data;
          formContact.onReset()
        }
      );
    }
  }

}
