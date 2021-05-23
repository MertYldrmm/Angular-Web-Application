import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubscriptionComponent } from './components/subscriber/subscriber.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'subscription', pathMatch: 'full' },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'orders', component: OrderComponent},
  { path: 'orders/:id', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
