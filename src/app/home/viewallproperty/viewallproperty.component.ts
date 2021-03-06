import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/_services/userservice.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-viewallproperty',
  templateUrl: './viewallproperty.component.html',
  styleUrls: ['./viewallproperty.component.css']
})
export class ViewallpropertyComponent implements OnInit {
  results:any = [];
  BASEURL;
  locations:any = [];
  location:any ='';
  searchString;
  mesg: string;
  currentdate;
  constructor(private userservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.BASEURL = environment.apiUrl;

    this.getallads();
    this.getalllocation();


    var d = new Date();
    console.log(d);
    const month = d.toLocaleString('default', { month: 'long' });
    console.log(month);
    console.log(d.getFullYear());
    console.log(d.getMonth());
    console.log(d.getDay());

    this.currentdate = month+' '+d.getDay()+','+d.getFullYear();
    console.log(this.currentdate);
    
    // return parts[3]+"-"+months[parts[1]]+"-"+parts[2];
  
    
  }

  getallads()
  {
    this.userservice.getallads().subscribe(
      data =>{
        console.log(data);
        this.results =data['responce']
      },
      error =>{

      }
    )
  }
  select(a)
  {
    localStorage.setItem("detail",JSON.stringify(a));
    this.router.navigate(['/singleproperty'])
  }
  getalllocation() {
    this.userservice.getlocation().subscribe(
      data => {
        this.locations = data['responce'];
      

      },
      error => {

      }
    )
    
  }
  selectedevent(s)
  {
      console.log(s);
      this.userservice.getadsbylocation(s).subscribe(
        data =>{
          this.results = data['responce'];
          console.log(this.results);
          
          console.log(this.results.length);
          if(this.results.length ==0)
          {
            this.mesg = "no data found";
          }
          else{
            this.mesg = "data found";

          }
          
          
        },
        error =>{

        }
      )
      
  }
  getaddByLocation()
  {
    
  }
}
