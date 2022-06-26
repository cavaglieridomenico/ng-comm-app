import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Alert } from './alert.model';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alert: Alert = {
    alertMessage: '',
    alertColor: '',
    alertShow: false,
  };

  constructor() {}

  getAlertData() {
    return this.alert;
  }

  setShowAlert(
    message: string = 'Please, switch to Admin.',
    color: string = '#9c27b0'
  ) {
    this.alert.alertMessage = message;
    this.alert.alertColor = color;
    this.alert.alertShow = true;
    this.setHideAlert();
  }

  setHideAlert(time: number = 4000) {
    setTimeout(() => (this.alert.alertShow = false), time);
  }

  setAlert() {}
}
