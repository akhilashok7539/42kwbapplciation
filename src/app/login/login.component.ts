import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name;
  password;
  constructor(private userservice: UserserviceService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    if (this.name == "" ||this.name == null ) {
      this.snackbar.open('user name is required');

    }
    else if(this.password =='' ||this.password == null)
    {
      this.snackbar.open('Password is required');
    }
    else 
    {

     let req =
    {
      "emailId": this.name,
      "password": this.password
    }
    this.userservice.login(req).subscribe(
      data => {
        localStorage.setItem("isloggedin", JSON.stringify(true));
        localStorage.setItem("admin", JSON.stringify(data));
        this.router.navigate(['/admin']);
      },
      error => {
      this.snackbar.open('Incorrect user name and password');
        
      }
    )
  }

  }
}
