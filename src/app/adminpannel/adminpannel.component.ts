import { Component, OnInit } from '@angular/core';
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

  constructor(private userservice:UserserviceService,private router:Router) { }

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
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/Home'])
  }
}
