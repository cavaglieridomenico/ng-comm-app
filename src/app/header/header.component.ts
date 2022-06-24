import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUrl: any;
  isYachtsPage: boolean;
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.currentUrl = this.location.path();
    console.log(this.currentUrl);
    this.isYachtsPage = this.currentUrl === '/yachts';
    console.log(this.isYachtsPage);
  }
}
