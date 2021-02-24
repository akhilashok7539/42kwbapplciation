import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-viewsingle-property',
  templateUrl: './viewsingle-property.component.html',
  styleUrls: ['./viewsingle-property.component.css']
})
export class ViewsinglePropertyComponent implements OnInit {
  details:any;
  BASEURL;
  discription;
  img;
  address;
  createdAt;
  location
  title: any;
  endPrize;
  startingPrize;
  largerimaage;
  constructor() { }

  ngOnInit(): void {
    this.BASEURL = environment.apiUrl;
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
    this.largerimaage = this.BASEURL+'admin/advertisement/'+this.img;

  }
  thumnail(s){
    console.log(s);
    this.largerimaage = s;
    
  }
}
