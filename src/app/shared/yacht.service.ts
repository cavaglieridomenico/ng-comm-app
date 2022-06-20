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

  setLocalStorage(nameData: string, data: any) {
    localStorage.setItem(nameData, JSON.stringify(data));
  }

  getLocalStorage(nameData: string) {
    const singleYacht = localStorage.getItem(nameData);
    if (singleYacht) {
      return JSON.parse(localStorage.getItem(nameData));
    } else {
      return null;
    }
  }

  fetchData() {
    this.http
      .get(this.urlMax, { observe: 'response' })
      .subscribe((response) => {
        const data: any = response.body;
        this.yachtList = data;
        this.yachtListUpdate.emit(data);
        this.setLocalStorage('yachtList', data);
      });
  }

  fetchPostData(yacht: Yacht) {
    this.responseYacht = null;
    this.http.post(this.urlMax, yacht).subscribe((response: Yacht) => {
      this.responseYacht = response;
      this.responseyachtUpdate.emit(response);
    });
  }

  fetchDeleteSingleData(id: string) {
    this.http.delete(`${this.urlMax}/${id}`).subscribe((response: any) => {
      this.responseYacht = response;
      this.responseyachtUpdate.emit(response);
    });
  }

  fetchUpdateSingleData(id: string, yacht: Yacht) {
    this.http.put(`${this.urlMax}/${id}`, yacht).subscribe((response: any) => {
      this.responseYacht = response;
      this.responseyachtUpdate.emit(response);
    });
  }

  getYachtList() {
    return this.yachtList;
  }

  getYachtListFilter(list: Yacht[], offer: boolean) {
    return list.filter((item) => item.onOffer === offer);
  }

  setYachtById(id: string = '1') {
    const yacht = this.yachtList.find((item) => item.id === id);
    this.setLocalStorage('singleYacht', yacht);
  }

  getYachtById(id: string = '1'): Yacht {
    return this.getLocalStorage('singleYacht');
  }
}
