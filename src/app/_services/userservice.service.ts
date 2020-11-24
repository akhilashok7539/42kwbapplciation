import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  BASEURL ;
  constructor(private http:HttpClient)
   { 
     this.BASEURL = environment.apiUrl;
   }

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
