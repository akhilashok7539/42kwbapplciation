import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/_services/userservice.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  location:any;
  reuslts:any=[];
  constructor(private userservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getalllocation();
  }
  submit()
  {
    let req = {
      "location":this.location
    }
    console.log(req);
    this.userservice.addlocation(req).subscribe(
      data =>{
        this.router.navigate(['/location']);
      },
      error=>{
        alert("unable to add location")
      }
    )
  }
  getalllocation() {
    this.userservice.getlocation().subscribe(
      data => {
        this.reuslts = data['responce'];


      },
      error => {

      }
    )
  }
}
