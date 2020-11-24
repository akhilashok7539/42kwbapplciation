import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  reuslts;
  // BASEURL = "http://42kspaceservice-env.eba-awz4xtc8.ap-south-1.elasticbeanstalk.com/42kspace/api/v1/";
  BASEURL;
  constructor(private userservice:UserserviceService) { }

  ngOnInit(): void {
    // this.getalllocation();
    this.BASEURL = environment.apiUrl;

    this.getallproperties();
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
  getallproperties()
  {
      this.userservice.getallproperties().subscribe(
      data => {
        this.reuslts = data['responce'];
        console.log(data);
        

      },
      error => {

      }
    )
  }
}
