import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable()
export class DashboardService {
  httpOptions={
    'Content-Type':'application/json',
    'Authorization':`jwt ${this.authService.getToken()}`
  }
  constructor(private authService:AuthService) { }
}
