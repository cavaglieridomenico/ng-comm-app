import { Component, OnInit } from '@angular/core';
import { Yacht } from '../shared/yacht.model';
import { YachtService } from '../shared/yacht.service';

@Component({
  selector: 'app-yacht',
  templateUrl: './yacht.component.html',
  styleUrls: ['./yacht.component.css'],
})
export class YachtComponent implements OnInit {
  yachtList: Yacht[];
  errorMessageFetch: string = 'Loading...';
  constructor(private yachtService: YachtService) {}

  ngOnInit(): void {
    this.yachtService.fetchData();
    this.yachtService.yachtListUpdate.subscribe(() => {
      this.yachtList = this.yachtService.getYachtList();
    });
  }
}
