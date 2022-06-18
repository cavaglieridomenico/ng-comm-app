import { Component, OnInit } from '@angular/core';
import { Yacht } from '../shared/yacht.model';

@Component({
  selector: 'app-yacht',
  templateUrl: './yacht.component.html',
  styleUrls: ['./yacht.component.css'],
})
export class YachtComponent implements OnInit {
  yacht1 = new Yacht(
    2,
    'sasa',
    'sasa',
    'https://i2.wp.com/www.barcheamotore.com/wp-content/uploads/2020/02/Serene-133.8-m-Fincantieri.jpg?w=900&ssl=1',
    'sasa',
    53,
    true
  );
  yacht2 = new Yacht(
    2,
    'AFSASF',
    'AFSASF',
    'https://i2.wp.com/www.barcheamotore.com/wp-content/uploads/2020/02/Serene-133.8-m-Fincantieri.jpg?w=900&ssl=1',
    'AFSASF',
    53,
    false
  );

  yachtList: Yacht[] = [this.yacht1, this.yacht2];
  constructor() {}

  ngOnInit(): void {}
}
