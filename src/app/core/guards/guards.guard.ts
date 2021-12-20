import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(): boolean{
    if(this.authService.isAuth){

      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
    
  }
  
  constructor(private authService: AuthService, private router: Router){
    
  }
}
