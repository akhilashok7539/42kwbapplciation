import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
city:any=[]
  constructor(private userservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getalllocation();
  }
  newSearch()
  {
    this.router.navigate(['/viewallproperty'])
  }
  getalllocation() {
    this.userservice.getlocation().subscribe(
      data => {
        this.city = data['responce'];
       
      },
      error => {

      }
    )
  }
}
