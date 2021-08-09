import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/Auth/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService:AuthService,
    private router:Router,
    private JwtHelper : JwtHelperService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
    const token = localStorage.getItem("token");
    if (token && !this.JwtHelper.isTokenExpired(token)) {
      return true;
    } 
    else 
    {
      this.router.navigate(["login"]);
      return false;
    }
  }
  
}

// not used can  delete
