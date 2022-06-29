import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Alert } from './alert.model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  isYachtsPage: boolean;
  currentRoute: string;
  alert: Alert;
  constructor(private alertService: AlertService, private router: Router) {
    this.alert = this.alertService.getAlertData();

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute === '/yachts') {
          this.isYachtsPage = true;
        } else {
          this.isYachtsPage = false;
        }
      }
    });
  }
  ngOnInit(): void {}
}
