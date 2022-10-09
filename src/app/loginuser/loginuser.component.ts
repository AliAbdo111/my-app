import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({

  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  dd:string=''
  constructor() { }

  ngOnInit(): void {
  }
  funlogin(signInform:NgForm){
 signInform.value.emaillog
   
  }
}
