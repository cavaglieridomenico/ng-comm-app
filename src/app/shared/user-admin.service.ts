import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAdminService {
  isUserAdmin: boolean = false;
  constructor() {}

  setUserAdmin() {
    this.isUserAdmin = true;
  }

  setUserGuest() {
    this.isUserAdmin = false;
  }
}
