import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  BASEURL = "http://42kspaceservice-env.eba-awz4xtc8.ap-south-1.elasticbeanstalk.com/42kspace/api/v1/";
  constructor(private http:HttpClient) { }

  login(req)
  {
    return this.http.post(this.BASEURL+'admin/login',req);

  }
  addlocation(req)
  {
    return this.http.post(this.BASEURL+'admin/locations',req);
  }
  getlocation()
  {
    return this.http.get(this.BASEURL+'admin/locations');
  }
  addpropety(s)
  {
    return this.http.post(this.BASEURL+'admin/advertisement',s);

  }
  getallads(){
    return this.http.get(this.BASEURL+'admin/advertisement');
  }
  getallproperties()
  {
    return this.http.get(this.BASEURL+'admin/adbylocation');

  }
  getadsbylocation(s){
    return this.http.get(this.BASEURL+'admin/advertisment/'+s);

  }
  submitform(req){
    return this.http.post(this.BASEURL+'user/feedback',req);

  } 
  active(s,req)
  {
    return this.http.put(this.BASEURL+'admin/advertisement/'+s,req);

  }
  inactive(s,req)
  {
    return this.http.put(this.BASEURL+'admin/advertisement/'+s,req);

  }
}
