import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component ({
    selector: 'page-checkout',
    templateUrl: 'checkout.html'
})

export class CheckoutPage implements OnInit{
    item;

    ngOnInit() {
        this.item = this.navParams.data;
    }
    constructor(private navCtrl: NavController, private navParams: NavParams){

    }

    onPurchase(){
        this.navCtrl.popToRoot();
    }
}