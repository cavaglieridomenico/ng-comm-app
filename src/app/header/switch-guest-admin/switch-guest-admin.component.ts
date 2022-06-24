import { Component, OnInit } from '@angular/core';
import { UserAdminService } from 'src/app/shared/user-admin.service';

@Component({
  selector: 'app-switch-guest-admin',
  templateUrl: './switch-guest-admin.component.html',
  styleUrls: ['./switch-guest-admin.component.css'],
})
export class SwitchGuestAdminComponent implements OnInit {
  switchText: string;
  isUserAdmin: boolean;
  constructor(private userAdminService: UserAdminService) {}

  ngOnInit(): void {

}
