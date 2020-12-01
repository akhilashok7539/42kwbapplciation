import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-adminpannel',
  templateUrl: './adminpannel.component.html',
  styleUrls: ['./adminpannel.component.css']
})
export class AdminpannelComponent implements OnInit {
  results:any=[];
  // BASEURL = "http://42kspaceservice-env.eba-awz4xtc8.ap-south-1.elasticbeanstalk.com/42kspace/api/v1/";
  BASEURL;
  // results: any;
  searchString: any;
  reuslts: any = [];
  displayedColumns = ['Propertname','location','address','pricerange', 'img','Edit'];
  limit: number = 15;
  skip: number = 0;
  totalLength: number = 0;
  pageIndex: number = 0;
  pageLimit: number[] = [5, 10];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private userservice:UserserviceService,private router:Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void { 
    this.getallads();
    this.BASEURL = environment.apiUrl;
  }
  getallads()
  {
    this.userservice.getallads().subscribe(
      data =>{
        this.results = data['responce'];
        this.dataSource.data = this.results;
        console.log(data);
        
      },
      error =>{

      }
    )
  }
  active(a)
  {
    let req = {
      "isActive": "true"
    }
    this.userservice.active(a._id,req).subscribe(
      data =>{
        this.snackbar.open('Status Updated');
        this.ngOnInit();
      },
      error =>{
        this.snackbar.open('Unable to update status');

      }
    )
  }
  inactive(a){
    
    let req = {
      "isActive": "false"
    }
    this.userservice.inactive(a._id,req).subscribe(
      data =>{
        this.snackbar.open('Status Updated');
        this.ngOnInit();

      },
      error =>{
        this.snackbar.open('Unable to update status');

      }
    )
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['/Home'])
  }
}
