import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { MainComponent } from './main/main.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { AuthGuard } from './services/auth-guard.service';
import { SingleActivityComponent } from './single-activity/single-activity.component';

const routes: Routes = [
  { path:'',component:MainComponent},
  { path:'activity',component:ActivityComponent},
  { path:'activity/:id',component:SingleActivityComponent},
  { path:'contact',component:ContactComponent},
  { path:'event',component:EventComponent},
  { path:'createUser',component:CreateUserComponent},
  { path:'auth',component:AuthComponent},
  { path:'dashboard',canActivate:[AuthGuard],component:DashboardComponent},
  { path:'not-found',component:NotFountComponent},
  { path:'**',redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
