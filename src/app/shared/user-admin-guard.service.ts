import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { UserAdminService } from './user-admin.service';

@Injectable({
  providedIn: 'root',
})
export class UserAdminGuardService implements CanActivate {
  constructor(
    private userAdminService: UserAdminService,
    private router: Router,
    private alertService: AlertService
  ) {}

  canActivate(): boolean {
    if (this.userAdminService.isUserAdmin) {
      return true;
    } else {
      this.router.navigate(['/yachts']);
      window.scrollTo(0, 0);
      this.alertService.setShowAlert();
      return false;
    }
  }
}
