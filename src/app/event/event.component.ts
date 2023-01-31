import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onNavigationTable(event:Event){
    let list_Nav=document.querySelectorAll('.event-navigation ul li');
    let table=document.querySelector('.table tbody');
    let tableItems=document.querySelectorAll('.table tbody .ts-meta');
    list_Nav.forEach(itemNav=>{
        itemNav.classList.add('active')
        if(event.target==itemNav && itemNav.getAttribute('data-tsmeta')=='all'){
            if(table?.classList.contains('filter')){
              tableItems.forEach(element=>{
                element.classList.remove('show');
                element.classList.add('hover-bg');
              });
              table.classList.remove('filter')
            }
        }
        else if(event.target==itemNav){
          tableItems.forEach(element=>{
              table?.classList.add('filter');
              if(element.getAttribute('data-tsmeta')==itemNav.getAttribute('data-tsmeta'))
              {
                element.classList.add('show');
                element.classList.add('hover-bg');
              }else{
                element.classList.remove('show');
                element.classList.remove('hover-bg');
              }
          })
          itemNav.classList.add('active');

        }else{
          itemNav.classList.remove('active')
        }
    });
  }
  openModal(){
    const modalContainer=document.querySelector('.section-modal');
    modalContainer?.classList.add("active");
  }
  closeModal(){
    const modalContainer=document.querySelector('.section-modal');
    modalContainer?.classList.remove("active");
  }

}
