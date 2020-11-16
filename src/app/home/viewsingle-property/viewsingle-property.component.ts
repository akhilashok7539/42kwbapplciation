import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewsingle-property',
  templateUrl: './viewsingle-property.component.html',
  styleUrls: ['./viewsingle-property.component.css']
})
export class ViewsinglePropertyComponent implements OnInit {
  details:any;
  BASEURL = "http://42kspaceservice-env.eba-awz4xtc8.ap-south-1.elasticbeanstalk.com/42kspace/api/v1/";
  discription;
  img;
  address;
  createdAt;
  location
  title: any;
  endPrize;
  startingPrize;
  constructor() { }

  ngOnInit(): void {
    this.details = JSON.parse(localStorage.getItem("detail"));
    this.img = this.details['fileName'];
    this.title = this.details['title'];
    this.discription = this.details['discription'];
    this.address = this.details['address'];
    let date = this.details['createdAt'];
    this.createdAt = date.slice(0,10);
    this.location = this.details['location'];
    this.endPrize = this.details['endPrize'];
    this.startingPrize = this.details['startingPrize'];
  }

}
