import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  image;
  formData = new FormData();
  description;
  title;
  address;
  startprice;
  endprice;
  location = "";
  Propertyform:FormGroup;
  submitted = false;
  constructor(private userservice:UserserviceService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getalllocation();
    this.Propertyform = this.fb.group(
      {
        title:['',Validators.required],
        location:['',Validators.required],
        description:['',Validators.required],
        image:['',Validators.required],
        address:['',Validators.required],
        startprice:['',Validators.required],
        endprice:['',Validators.required],
      }
    )
  }
  get f() { return this.Propertyform.controls; }

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
    this.submitted = true;

    // stop here if form is invalid
    if (this.Propertyform.invalid) {
      console.log("invalid");

        return;
        
    }
    else{

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
}
