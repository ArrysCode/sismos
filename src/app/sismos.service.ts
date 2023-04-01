import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SismosService {
  apiUrl = 'https://api.xor.cl/sismo';

  constructor(private http: HttpClient) { }
  getDatos() {
    return this.http.get(`${this.apiUrl}/recent`);
  }
}
