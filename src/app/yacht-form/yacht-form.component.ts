import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Yacht } from '../shared/yacht.model';
import { YachtService } from '../shared/yacht.service';

@Component({
  selector: 'app-yacht-form',
  templateUrl: './yacht-form.component.html',
  styleUrls: ['./yacht-form.component.css'],
})
export class YachtFormComponent implements OnInit {
  yachtForm: FormGroup;

  yacht: Yacht;

  errorMessageFetch: string = 'Loading...';

  constructor(
    private yachtService: YachtService,
    private route: ActivatedRoute
  ) {
    const id = +this.route.snapshot.params['id'];
    this.yacht = yachtService.getYachtFindById(yachtService.getYachtList(), id);
  }

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
