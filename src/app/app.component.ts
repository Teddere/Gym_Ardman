import { Component,OnInit } from '@angular/core';
import { Router,Event as RouterEvent,NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title=['Gym-','Ardman'];
  public loader=true;

  constructor(private router:Router){
    this.router.events.subscribe((event:RouterEvent)=>{
      this.navigationInterceptor(event);
    })
  }
  ngOnInit(): void{ }
  navigationInterceptor(event:RouterEvent) :void{
    if(event instanceof NavigationStart){
      this.loader=true;
    }
    if(event instanceof NavigationEnd){
      setTimeout(()=>{
        this.loader=false;
      },500)
    }
    if(event instanceof NavigationCancel){
      setTimeout(()=>{
        this.loader=true;
      },500)
    }
    if(event instanceof NavigationError){
      setTimeout(()=>{
        this.loader=false;
      },500)
    }
  }
}
