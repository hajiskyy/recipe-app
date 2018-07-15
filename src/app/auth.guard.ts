import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map, take, tap} from 'rxjs/operators';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.afAuth.authState.pipe(
      map(authInfo => !!authInfo),
      take(1),
      tap(allowed => {
          if(!allowed) {
              this.router.navigate(['/login']);
          }
      }),);
   }

}