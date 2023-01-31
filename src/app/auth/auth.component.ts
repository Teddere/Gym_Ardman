import { Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public authStatus:any;
  public statAuth=false;
  

  constructor(private router:Router,private ngZone:NgZone,private authService:AuthService,private formBuilder:FormBuilder) { }
  loginForm!:FormGroup;
  submitted:boolean=false;
  private token:any;
  msgError!:any;
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:new FormControl('',[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password:new FormControl('',[Validators.required])
    });
  }
  get form(){return this.loginForm.controls}
  // onSignIn(){
  //   this.authService.signIn().then(
  //     ()=>{
  //       console.log('connexion reussie !');
  //       this.authStatus=this.authService.isAuth;
  //       this.router.navigate(['dashbord'])
  //     }
  //   )
  // }
  onSignIn(){
    this.submitted=true;
    if(this.loginForm.valid){
      let userLogin={
        email:this.loginForm.value['email'],
        password:this.loginForm.value['password']
      }
      this.authService.signIn(userLogin).subscribe(
        data=>{
            console.log(data)
           this.token=data;
           this.token.toString();
          this.authService.setToken(this.token);
          this.router.navigate(['/dashboard'])
        },
        error=>{
          this.msgError='Authentication Echouée !'
        }
      );
    }
  }
  onSignOut(){
    this.authService.signOut();
    this.authStatus=this.authService
  }
  alertClose(){
    this.msgError='';
  }
}
