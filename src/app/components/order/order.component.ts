import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/service/subscription.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  subscriptionId = 'abc123';
  tutorials = null;

  errorMsg = '';
  error403 = 'Girilen ID değeri bulunamamıştır.';
  error500 = 'Sunucu hatası. Lütfen tekrar deneyin.';
  isError = false;

  constructor(
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //this.getOrders(this.subscriptionId);
    if(this.route.snapshot.paramMap.get('id') != null){ 
      console.log(this.route.snapshot.paramMap.get('id'));
      this.getOrders(this.route.snapshot.paramMap.get('id'));
    }
  }

  getOrders(subscriptionId: any): void {
    this.subscriptionService.getOrder(subscriptionId)
    .subscribe(
      response => {
        console.log(response);
        this.tutorials=response;
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
    console.log(event.target.id.value);
    this.getOrders(event.target.id.value);
  }

}
