import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean > | Promise<boolean> | boolean {
        if(this.authService.isLogged() && this.authService.isAuth===true){
            return true;
        }else{
            this.router.navigate(['/auth']);
            return false;
        }
    }

}