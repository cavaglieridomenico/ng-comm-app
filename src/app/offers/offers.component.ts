import { Component, OnInit } from '@angular/core';
import { Yacht } from '../shared/yacht.model';
import { YachtService } from '../shared/yacht.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  yachtList: Yacht[];
  errorMessageFetch: string = 'Loading...';
  constructor(private yachtService: YachtService) {}

  ngOnInit(): void {
    this.yachtService.fetchData();
    this.yachtService.yachtListUpdate.subscribe(() => {
      this.yachtList = this.yachtService.getYachtListFilter(
        this.yachtService.getYachtList(),
        true
      );
    });
  }
}
