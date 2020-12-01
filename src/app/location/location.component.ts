import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  results: any;
  searchString: any;
  reuslts: any = [];
  displayedColumns = ['location', 'Edit'];
  limit: number = 15;
  skip: number = 0;
  totalLength: number = 0;
  pageIndex: number = 0;
  pageLimit: number[] = [5, 10];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private userservice: UserserviceService,private router:Router) { }

  ngOnInit() {
    this.getalllocation();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getalllocation() {
    this.userservice.getlocation().subscribe(
      data => {
        this.reuslts = data['responce'];
        this.dataSource.data = this.reuslts;
        console.log(this.reuslts);

      },
      error => {

      }
    )
  }
  edit(a){
    console.log(a);
    //(s)
    sessionStorage.setItem("location",JSON.stringify(a))
    this.router.navigate(['/edit-location'])
  }
  delete(s)
  {
    this.userservice.delete(s.id).subscribe(
      data => {
        alert("Location Deleted Successfully");

      },
      error => {
        alert("Location Deleted UnSuccessfully");

      }
    )
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}