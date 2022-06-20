import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  //Data test
  // yacht: Yacht = {
  //   id: 1,
  //   productName: 'Eclipse',
  //   productTagLine: 'fast',
  //   productImg:
  //     'https://i0.wp.com/www.barcheamotore.com/wp-content/uploads/2020/02/MYEclipse-Frederikshavn-Denmark.jpeg?ssl=1',
  //   description:
  //     'Since 2010, the year of construction, Eclipse, the mega yacht of the Russian oil magnate Roman Abramovich, has dominated the ranking of the largest in the world for almost 5 years, before being sent to the low step of the podium by Azzam and Fulk Al Salamah . And many will remember that at the time of the launch of Azzam the headlines of the newspapers focused almost more on Abramovich, ousted from the first position, than on the yacht of the Emir of Abu Dhabi. The Russian entrepreneur has never hidden his passion for extreme luxury and Eclipse, from the German shipyard Blohm & Voss, fully represents the style of its owner. 162.50 long, it is decidedly less powerful than its rival Azzam, being able to count only on a quadruple MTU 10,000 horsepower engine which still allows Eclipse to reach the not inconsiderable speed of 25 knots. Missile systems, submarines, bulletproof glass and any other kind of luxury? Here you go, Eclipse!',
  //   dailyCost: 50000,
  //   onOffer: true,
  // };
  id: string;
  errorMessageFetch: string = 'Loading...';

  responseYachtMessage: string;

  typeRequest: string;

  constructor(
    private yachtService: YachtService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //Data test
    //const id = 1;

    //Data
    this.id = this.route.snapshot.params['id'];
    this.yacht = this.yachtService.getYachtFindById(
      yachtService.getYachtList(),
      this.id
    );
  }

  ngOnInit(): void {
    //Data test
    // this.yachtForm = new FormGroup({
    //   productName: new FormControl(this.yacht.productName),
    //   productTagLine: new FormControl(this.yacht.productTagLine),
    //   productImg: new FormControl(this.yacht.productImg),
    //   description: new FormControl(this.yacht.description),
    //   dailyCost: new FormControl(this.yacht.dailyCost),
    //   onOffer: new FormControl(this.yacht.onOffer),
    // });

    //Data
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
      console.log(this.yachtService.responseYacht);
      if (this.yachtService.responseYacht)
        this.responseYachtMessage = 'Operation completed successfully.';
      setTimeout(() => this.router.navigate(['yachts']), 3000);
    });
  }

  onAddYacht() {
    this.typeRequest = 'add';
    console.log('ADD CLICK');
  }

  onDeleteYacht() {
    this.typeRequest = 'delete';
    console.log('DELETE CLICK');
  }

  onUpdateYacht() {
    this.typeRequest = 'patch';
    console.log('PATCH CLICK');
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
        this.yachtService.fetchDeleteSingleData(this.id);
        break;
      case 'patch':
        this.yachtService.fetchUpdateSingleData(this.id, newYacht);
        break;
      default:
        return;
    }
  }
}
