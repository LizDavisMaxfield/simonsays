import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuotesPage } from '../quotes/quotes';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToQuotes() {
    this.navCtrl.push(QuotesPage);
  }

  onGoToShop() {
    this.navCtrl.push(ShopPage)
  }
}
