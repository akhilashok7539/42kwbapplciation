import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-adminpannel',
  templateUrl: './adminpannel.component.html',
  styleUrls: ['./adminpannel.component.css']
})
export class AdminpannelComponent implements OnInit {
  results:any=[];
  BASEURL = "http://42kspaceservice-env.eba-awz4xtc8.ap-south-1.elasticbeanstalk.com/42kspace/api/v1/";

  constructor(private userservice:UserserviceService,private router:Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void { 
    this.getallads();
  }
  getallads()
  {
    this.userservice.getallads().subscribe(
      data =>{
        this.results = data['responce'];
        console.log(data);
        
      },
      error =>{

      }
    )
  }
  active(a)
  {
    let req = {
      "isActive": "true"
    }
    this.userservice.active(a._id,req).subscribe(
      data =>{
        this.snackbar.open('Status Updated');
        this.ngOnInit();
      },
      error =>{
        this.snackbar.open('Unable to update status');

      }
    )
  }
  inactive(a){
    
    let req = {
      "isActive": "false"
    }
    this.userservice.inactive(a._id,req).subscribe(
      data =>{
        this.snackbar.open('Status Updated');
        this.ngOnInit();

      },
      error =>{
        this.snackbar.open('Unable to update status');

      }
    )
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/Home'])
  }
}
