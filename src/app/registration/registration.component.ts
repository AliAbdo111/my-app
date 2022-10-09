import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register: FormGroup;
  constructor( private formBilder:FormBuilder) { 
  //   this.register=formBilder.group({
  //   Useranmelog :new  FormControl(),
  //   emaillog :new  FormControl(),
  //   passwordlog:new  FormControl(),
  //   Addresslog:new  FormControl(),
  //   Phonelog:new  FormControl(),
  //   nationalId:new  FormControl()
  // })
  this.register=formBilder.group({
    Useranmelog :['',Validators.required],
    emaillog :['',Validators.required],
    passwordlog:['',Validators.required],
    Addresslog:['',Validators.required],
    Phonelog:['',Validators.required],
    nationalId:['',Validators.required],
  })
  }

  ngOnInit(): void {
  }
  DisplayData()
   {
    console.log(this.register.value.Useranmelog);
    console.log(this.register.value.emaillog);
    console.log(this.register.value.Phonelog); 
    console.log(this.register.value.Phonelog); 
    console.log(this.register.value.nationalId);
   }
}
