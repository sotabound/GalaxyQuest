import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalaxyDetailGuard implements CanActivate {
  
  constructor(private router: Router) {};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = Number(route.paramMap.get('id'))
      if(isNaN(id) || id < 1 ) {
        alert('Invalid Galaxy Id');
        this.router.navigate(['/galaxies']);
        return false;
      }
      return true;
  }
  
}
