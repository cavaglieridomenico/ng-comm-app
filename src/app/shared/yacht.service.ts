import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Yacht } from './yacht.model';

@Injectable({
  providedIn: 'root',
})
export class YachtService {
  constructor(private http: HttpClient) {}

  url = 'https://62ad84be645d00a28afae461.mockapi.io/ngcommapp';
  urlMax = 'https://60b21f9562ab150017ae1b08.mockapi.io/maxServer/yacht';

  private yachtList: Yacht[];
  yachtListUpdate = new EventEmitter<Yacht[]>();

  responseYacht: Yacht;
  responseyachtUpdate = new EventEmitter<Yacht>();

  fetchData() {
    this.http
      .get(this.urlMax, { observe: 'response' })
      .subscribe((response) => {
        const data: any = response.body;
        this.yachtList = data;
        this.yachtListUpdate.emit(data);
      });
  }

  fetchPostData(yacht: Yacht) {
    this.responseYacht = null;
    this.http.post(this.urlMax, yacht).subscribe((response: Yacht) => {
      this.responseYacht = response;
      this.responseyachtUpdate.emit(response);
      console.log(this.responseYacht);
    });
  }

  fetchDeleteSingleData(id: number) {
    this.http.delete(`${this.urlMax}/?id=${id}`).subscribe((response: any) => {
      this.responseYacht = response;
      this.responseyachtUpdate.emit(response);
      console.log(this.responseYacht);
    });
  }

  fetchUpdateSingleData(id: number, yacht: Yacht) {
    this.http
      .patch(`${this.urlMax}/${id}`, yacht)
      .subscribe((response: any) => {
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
