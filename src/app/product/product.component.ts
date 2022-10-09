import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../model/iproduct';
import { productlist } from '../model/product.serves';
import { Ictegory } from './../model/ictegory';


@Component({
  
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // providers:  [ productlist ]
})


export class ProductComponent implements OnInit {
//  filterlist:Iproduct[];
 filtercategory: Ictegory[] =  [];
  slctcategory:number=0
  orderTotalPrice:number=0;
  CartList: Iproduct[];
  constructor(private service: productlist) {
  this.CartList=service.getCart();

  //  this.filterlist=[];
  //  this.filtercategory=service.getcategory();
  }
  Buy(prdprice:number ,count:any ,id:any){
    this.service.Buy(count,id);
    this.orderTotalPrice += count*prdprice;
  this.CartList=this.service.getCart();

  }
  ngOnInit(): void {}
  /////tow way baiding
}
