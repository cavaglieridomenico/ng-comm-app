import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Yacht } from '../shared/yacht.model';

@Component({
  selector: 'app-yacht-form',
  templateUrl: './yacht-form.component.html',
  styleUrls: ['./yacht-form.component.css'],
})
export class YachtFormComponent implements OnInit {
  yachtForm: FormGroup;

  yacht: Yacht = {
    id: 2,
    productName: 'Dubai',
    productTagLine: 'fast',
    productImg:
      'https://i0.wp.com/www.barcheamotore.com/wp-content/uploads/2018/07/Dubai-.jpg?ssl=1',
    description:
      'The yacht of Sheikh Mohammed bin Rashid Al Maktoum, emir, needless to say, of Dubai. Just 50 centimeters shorter than Eclipse, it was started in 1996 in Germany, at the Blohm & Voss shipyards in collaboration with Lürssen, for the Prince of the Sultanate of Brunei, Jefri Bolkiah. In 2001, the hull arrived in Dubai, where Platinum Yachts, behind which Sheikh Mohammed bin Rashid Al Maktoum is behind, took care of the completion of the works in 2005. The mosaic of stories and people who worked in the 9 years preceding the launch remains in the history of the yacht, whose interiors, curated by Andrew Winch, are the result of an intense research and refinement of detail with a peculiarity. The leitmotiv of the decorations are precisely the mosaics, omnipresent on board. With a top speed of 26 knots and a cruising speed of 25, Dubai is capable of running autonomously up to 8,000 consecutive miles, thanks to four 8450 horsepower MTU engines.',
    dailyCost: 60000,
    onOffer: false,
  };

  constructor() {}

  ngOnInit(): void {
    this.yachtForm = new FormGroup({
      productName: new FormControl(this.yacht.productName),
      productTagLine: new FormControl(this.yacht.productTagLine),
      productImg: new FormControl(this.yacht.productImg),
      description: new FormControl(this.yacht.description),
      dailyCost: new FormControl(this.yacht.dailyCost),
      onOffer: new FormControl(this.yacht.onOffer),
    });
  }

  onSubmit() {
    console.log('ciao ');
  }
  // onUpdate() {}
  // onCreate() {}
  // onDelete() {}
}
