import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  responseYachtMessage: string;

  typeRequest: string;

  constructor(private yachtService: YachtService, private router: Router) {
    this.yacht = this.yachtService.getYachtById();
  }

  ngOnInit(): void {
    this.yachtService.fetchData();

    this.yachtForm = new FormGroup({
      productName: new FormControl(this.yacht.productName),
      productTagLine: new FormControl(this.yacht.productTagLine),
      productImg: new FormControl(this.yacht.productImg),
      description: new FormControl(this.yacht.description),
      dailyCost: new FormControl(this.yacht.dailyCost),
      onOffer: new FormControl(this.yacht.onOffer),
      id: new FormControl(this.yacht.id),
    });

    this.yachtService.responseyachtUpdate.subscribe(() => {
      if (this.yachtService.responseYacht)
        this.responseYachtMessage = 'Operation completed successfully.';
      setTimeout(() => this.router.navigate(['yachts']), 3000);
    });
  }

  onAddYacht() {
    this.typeRequest = 'add';
  }

  onDeleteYacht() {
    this.typeRequest = 'delete';
  }

  onUpdateYacht() {
    this.typeRequest = 'patch';
  }

  onSubmit() {
    const getOfferParse = () =>
      this.yachtForm.get('onOffer').value === 'true' ? true : false;

    const newYacht = new Yacht(
      this.yachtForm.get('productName').value,
      this.yachtForm.get('productTagLine').value,
      this.yachtForm.get('productImg').value,
      this.yachtForm.get('description').value,
      this.yachtForm.get('dailyCost').value,
      getOfferParse()
    );
    switch (this.typeRequest) {
      case 'add':
        this.yachtService.fetchPostData(newYacht);
        break;
      case 'delete':
        this.yachtService.fetchDeleteSingleData(this.yacht.id);
        break;
      case 'patch':
        this.yachtService.fetchUpdateSingleData(this.yacht.id, newYacht);
        break;
      default:
        return;
    }
  }
}
