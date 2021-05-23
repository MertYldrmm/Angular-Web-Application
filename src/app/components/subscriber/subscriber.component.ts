import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/service/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriptionComponent implements OnInit {

  phoneNummber = "5332858530";
  tutorials = null;

  errorMsg = '';
  error403 = 'Belirtilen telefona ait kayıt bulunamamıştır.';
  error500 = 'Sunucu hatası. Lütfen tekrar deneyin.';
  isError = false;

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    //this.getCostumer(this.phoneNummber);
  }

  getCostumer(phone: any): void {
    this.subscriptionService.get(phone)
    .subscribe(
      response => {
        console.log(response);
        this.tutorials = response;
      },
      error => {
        this.isError=true;
        console.log(error);
        if(error.status == 403)
          this.errorMsg = this.error403;
        else 
          this.errorMsg = this.error500;
      });
  }

  onSubmit(event: any){
    this.tutorials = null;
    this.isError = false;
    console.log(event.target.phoneNumber.value);
    this.getCostumer(event.target.phoneNumber.value);
  }

}
