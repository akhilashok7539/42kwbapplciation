import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/_services/userservice.service';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {
  location:any;
  details;
  constructor(private userservice:UserserviceService,private router:Router) { }


  ngOnInit(): void {
    this.details= JSON.parse(sessionStorage.getItem("location"));

    this.location =this.details['location'];
  }
  submit()
  {
    let req = {
      "location":this.location
    }
    console.log(req);
    this.userservice.editlocation(req,this.details['id']).subscribe(
      data =>{
        this.router.navigate(['/location']);
      },
      error=>{
        alert("unable to add location");
      }
    )
  }
}
