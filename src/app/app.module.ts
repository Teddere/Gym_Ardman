import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ActivityComponent } from './activity/activity.component';
import { SingleActivityComponent } from './single-activity/single-activity.component';
import { EventComponent } from './event/event.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule} from'@angular/forms';
import { HttpClientModule } from'@angular/common/http';
// Services
import { ActivityService } from './services/activity.service';
import { ContactService } from './services/contact.service';
import { AuthService } from './services/auth.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';

// registerLocalDate(localeFr,'fr')

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ActivityComponent,
    SingleActivityComponent,
    ContactComponent,
    EventComponent,
    AuthComponent,
    DashboardComponent,
    NotFountComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ActivityService,ContactService,AuthService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
