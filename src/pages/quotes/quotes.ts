import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quotesList: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.quotesList = [
    {id:1, name:"Good Job", link:"goodjob.jpg"},
    {id:2, name:"Thanks!", link:"goodjob.jpg"},
    {id:3, name:"I Love you", link:"goodjob.jpg"}]
  }

  onGoToQuotePage(quote: object) {
    this.navCtrl.push(QuotePage, quote);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

}
