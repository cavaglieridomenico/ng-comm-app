import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Yacht } from './yacht.model';

@Injectable({
  providedIn: 'root',
})
export class YachtService {
  constructor(private http: HttpClient) {}

  url = 'https://62ad84be645d00a28afae461.mockapi.io/ngcommapp';

  private yachtList: Yacht[];
  yachtListUpdate = new EventEmitter<Yacht[]>();

  responseYacht: Yacht;
  responseyachtUpdate = new EventEmitter<Yacht>();

  fetchData() {
    this.http.get(this.url, { observe: 'response' }).subscribe((response) => {
      const data: any = response.body;
      this.yachtList = data;
      this.yachtListUpdate.emit(data);
    });
  }

  fetchPostData(yacht: Yacht) {
    this.responseYacht = null;
    this.http.post(this.url, yacht).subscribe((response: Yacht) => {
      this.responseYacht = response;
      this.responseyachtUpdate.emit(response);
      console.log(this.responseYacht);
    });
  }

  getYachtList() {
    return this.yachtList;
  }

  getYachtListFilter(list: Yacht[], offer: boolean) {
    return list.filter((item) => item.onOffer === offer);
  }

  getYachtFindById(list: Yacht[], id: number) {
    return list.find((item) => item.id === id);
  }
}
