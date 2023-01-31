import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-single-activity',
  templateUrl: './single-activity.component.html',
  styleUrls: ['./single-activity.component.scss']
})
export class SingleActivityComponent implements OnInit {
  activity:any;
  constructor(private activityService:ActivityService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.activity=this.activityService.getActivityById(+id);
  }

}
