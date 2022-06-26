import { Component, OnInit } from '@angular/core';
import { Alert } from './alert.model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  alert: Alert;
  constructor(private alertService: AlertService) {
    this.alert = this.alertService.getAlertData();
  }

  ngOnInit(): void {}
}
