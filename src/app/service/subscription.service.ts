import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const getCustomerUrl = 'http://localhost:3000/subscription/getCustomerInfo';

const getOrderUrl = 'http://localhost:3000/subscription/getSubscriptionOrders' 

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  get(phoneNumber: any): Observable<any> {
    return this.http.get(`${getCustomerUrl}/${phoneNumber}` );
  }

  getOrder(subscriptionId: any): Observable<any> {
    const body = new HttpParams().set('subscriptionId',subscriptionId);
    return this.http.post(getOrderUrl, body.toString(), 
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }
    );
  }

}
