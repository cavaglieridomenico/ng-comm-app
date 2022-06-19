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

  fetchData() {
    return this.http
      .get(this.url, { observe: 'response' })
      .subscribe((response) => {
        const data: any = response.body;
        this.yachtList = data;
        this.yachtListUpdate.emit(data);
      });
  }

  getYachtList() {
    return this.yachtList;
  }

  getYachtListFilter(list: Yacht[], offer: boolean) {
    return list.filter((item) => item.onOffer === offer);
  }
}
