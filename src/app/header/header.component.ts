import { Component, OnInit,HostListener,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public mainNav=false;
  public dropdown=false;
  constructor() { }

  @Input() title:Array<String>=[];
  @HostListener('window:scroll',['$event']) navbarControl(){
    if(window.scrollY>30){
      this.mainNav=true;
    }else{
    this.mainNav=false;
    }
  }

  ngOnInit(): void {
  }

}
