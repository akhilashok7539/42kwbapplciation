import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  subject;
  name;
  Message;
  email;
  constructor(private userservice:UserserviceService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  submit()
  {
    if(this.name == ''|| this.name == null)
    {
      var message = 'Name is Required';
      this._snackBar.open(message);
    }
    else if(this.email == ''|| this.email == null){
      var message = 'Email ID is Required';
      this._snackBar.open(message);
    }
    else if(this.subject == ''|| this.subject == null){
      var message = 'Subject is Required';
      this._snackBar.open(message);
    }
    else if(this.Message == ''|| this.Message == null){
      var message = 'Message is Required';
      this._snackBar.open(message);
    }
    let req ={
      "name":this.name,
      "emailId":this.email,
      "subject":this.subject,
      "message":this.Message,
    }
    this.userservice.submitform(req).subscribe(
      data =>{
        var message = 'Thanks for filling out form';
        this._snackBar.open(message);
        this.name ='';
        this.email = '';
        this.subject = '';
        this.Message = '';
      },
      error =>{
        var message = 'Please Try again after some time';
        this._snackBar.open(message);
      }
    )
  }
}
