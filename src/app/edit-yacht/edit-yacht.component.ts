import { Component, OnInit } from '@angular/core';
import { YachtService } from '../shared/yacht.service';

@Component({
  selector: 'app-edit-yacht',
  templateUrl: './edit-yacht.component.html',
  styleUrls: ['./edit-yacht.component.css'],
})
export class EditYachtComponent implements OnInit {
  constructor(private yachtService: YachtService) {}

  ngOnInit(): void {
    this.yachtService.fetchData();
  }
}
