import { Component, OnInit } from '@angular/core';
import { Datastor } from '../model/datastor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 one:Datastor;
 jj:boolean=false;

  constructor() {
  this.one=new Datastor(
    'iti','https://fakeimg.pl/350x200/ff0000/000' ,1000,
    ['asswan','isna' ,'idfo', 'alquy',
  'alex','deshna']
  )
   }

  ngOnInit(): void {
  }
   flag()
   {
    this.jj=!this.jj
   }
}
