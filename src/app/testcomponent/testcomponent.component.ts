import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  // disabled=false;
  // disable=false;
  // regifrom:FormGroup;
  // nam2;
  // nam1;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.regifrom = this.fb.group({
    //   nam1: new FormControl({value: '', disabled: false},Validators.required),

    //   nam2: new FormControl({value: '', disabled: false},Validators.required),
    // })
  }
  // onKeydown(a){
    
  //   this.disabled=true;

  //   if(a =='')
  //   {   
  //     console.log("disabled field percetange");
    
  //   this.regifrom.get('nam2').enable();

  //   }
  //   else{
  //   this.disabled=true;
  //   this.regifrom.get('nam2').disable();

  //   }
  // }
  // onKeydown1(a)
  // {
  //   this.disable = true;
  //   if(a =='')
  //   {
  //     console.log("disabled field amout");
  //     this.disable=false;
      
  //   }
  //   else{
  //   this.disable=true;

  //   }
  // }
}
