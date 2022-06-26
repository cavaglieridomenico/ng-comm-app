import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isYachtsPage: boolean;
  currentRoute: string;

  constructor(private router: Router) {
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
