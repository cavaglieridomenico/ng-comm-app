import { Component, OnInit } from '@angular/core';
import { UserAdminService } from 'src/app/shared/user-admin.service';

@Component({
  selector: 'app-switch-guest-admin',
  templateUrl: './switch-guest-admin.component.html',
  styleUrls: ['./switch-guest-admin.component.css'],
})
export class SwitchGuestAdminComponent implements OnInit {
  isUserAdmin: boolean;
  switchText: string;

  constructor(private userAdminService: UserAdminService) {
    this.isUserAdmin = this.userAdminService.isUserAdmin;
    this.setSwitchText(this.userAdminService.isUserAdmin);
  }

  ngOnInit(): void {}

  onSwitchUser() {
    if (this.userAdminService.isUserAdmin) {
      this.userAdminService.setUserGuest();
      this.setSwitchText(false);
    } else {
      this.userAdminService.setUserAdmin();
      this.setSwitchText(true);
    }
  }
  setSwitchText(booleanValue: boolean) {
    booleanValue ? (this.switchText = 'Admin') : (this.switchText = 'Guest');
  }
}
