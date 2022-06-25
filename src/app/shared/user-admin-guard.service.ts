import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserAdminService } from './user-admin.service';

@Injectable({
  providedIn: 'root',
})
export class UserAdminGuardService implements CanActivate {
  constructor(
    private userAdminService: UserAdminService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.userAdminService.isUserAdmin) {
      return true;
    } else {
      this.router.navigate(['/yachts']);
      window.scrollTo(0, 0);
      return false;
    }
  }
}
