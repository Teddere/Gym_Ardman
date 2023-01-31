import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormControl ,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
    userForm!:FormGroup;
    submitted:Boolean=false;
    msgError!:string;
    msgSuccess:any;
    constructor(private userService:UserService,private formBuilder:FormBuilder) { }

    ngOnInit(): void {
      this.userForm=this.formBuilder.group({
        firstName:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\p{L}]+$/)]),
        lastName:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\p{L}]+$/)]),
        genre:new FormControl('',[Validators.required,Validators.maxLength(1)]),
        city:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\p{L}]+$/)]),
        email:new FormControl('',[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
        codePostal:new FormControl('',[Validators.required,Validators.pattern(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/)]),
        password:new FormControl('',Validators.required),
        confirmPassword:new FormControl('',Validators.required)
      },{
        confirmValidate: this.MustMatch('password','confirmPassword'),
      });
    }

   
 
    MustMatch(password:string,confirm:string){
      return (formGoup:FormGroup)=>{
        const controlPassword=formGoup.controls[password];
        const controlConfirm=formGoup.controls[confirm];

        if( controlConfirm.errors && !controlConfirm.errors['invalidPassword']){
          return null;
        }
        if(controlPassword.value !==controlConfirm.value){
          controlConfirm.setErrors({invalidPassword:true});
        }else{
          controlConfirm.setErrors(null);
        }
        return null;
      }
    }
  
    get form(){ return this.userForm.controls;}
    onSubmitUser(){
      this.submitted=true;
      if(this.userForm.valid && this.userForm.value['password']===this.userForm.value['confirmPassword']){
        let user={
          firstName:this.userForm.value['firstName'],
          lastName:this.userForm.value['lastName'],
          genre:this.userForm.value['genre'],
          email:this.userForm.value['email'],
          city:this.userForm.value['city'],
          codePostal:this.userForm.value['codePostal'],
          password:this.userForm.value['password'],
          confirm:this.userForm.value['confirmPassword']
        }
        this.userService.createUser(user).subscribe(
          data=>{
            this.msgSuccess=data;
            this.onReset();
          },
          error=>{
            if(error){
              this.msgError='le compte n\'a pas été être créer.';
            }
          }
        )
      }
      
    }

    onReset() {
      this.submitted = false;
      this.userForm.reset();
    }
}
