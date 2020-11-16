import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  reuslts:any=[];
  img1;
  image1;
  formData = new FormData();
  description;
  title;
  address;
  startprice;
  endprice;
  location;

  constructor(private userservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getalllocation();
  }
  propertyimageadd(event)
  {
      this.img1 = event.target.files;
      this.image1 = this.img1.item(0);
      // console.log(event);
      
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
  submit()
  {
    this.formData.append("file",this.image1);
    this.formData.append("title",this.title);
    this.formData.append("discription",this.description);
    this.formData.append("address",this.address);
    this.formData.append("startingPrize",this.startprice);
    this.formData.append("endPrize",this.endprice);
    this.formData.append("location",this.location);
    console.log(this.formData);
    
    this.userservice.addpropety(this.formData).subscribe(
      data =>{
        this.router.navigate(['/admin'])
      },
      error =>{

      }
    )

  }
}
