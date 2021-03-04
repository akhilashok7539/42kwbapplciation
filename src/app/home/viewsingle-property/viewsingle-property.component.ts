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
  mapurl;
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
    this.mapurl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15751.641413952559!2d76.4591213697754!3d9.252307499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061fdff16c1395%3A0x7d0585ac06b56b11!2sNangiyarkulangara%20Kseb%20Substation!5e0!3m2!1sen!2sin!4v1614850774816!5m2!1sen!2sin';

  }
  thumnail(s){
    console.log(s);
    this.largerimaage = s;
    
  }
}
