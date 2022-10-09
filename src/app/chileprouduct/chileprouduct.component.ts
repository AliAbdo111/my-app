import { Component, OnInit } from '@angular/core';
import { productlist } from './../model/product.serves';
import { Iproduct } from './../model/iproduct';
import { Ictegory } from './../model/ictegory';

@Component({
  selector: 'app-chileprouduct',
  templateUrl: './chileprouduct.component.html',
  styleUrls: ['./chileprouduct.component.css'],
  // providers:  [ productlist ]
})
export class ChileprouductComponent implements OnInit {
  arrproduct:Iproduct[]=[];
  arryCtegory:Ictegory[]=[]
  constructor( private serves:productlist) { 
    this.arrproduct=serves.getProduct();
    this.arryCtegory=serves.getcategory();
  }

  ngOnInit(): void {
  }
  addtocart(prd:Iproduct){
    this.serves.addtocart(prd)
    this.arrproduct = this.serves.getProduct()

  }
}
