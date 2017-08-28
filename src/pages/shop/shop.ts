import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';

/**
 * Generated class for the ShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = ['milk', 'eggs', 'cheese', 'cereal']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  goToCheckout(item) {
    this.navCtrl.push(CheckoutPage, item);
  }

}
