import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  public list_activity:any;
  constructor(private activityService:ActivityService) { }

  ngOnInit(): void {
    this.list_activity=this.activityService.getActivityAll();
  }
  countElement(nbre:number){
    if(nbre<2){
        return 1;
    }else if(nbre<4){
        nbre
      return 0;
    }else{
      return 1;
    }
  }

}
