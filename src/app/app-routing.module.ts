import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminpannelComponent } from './adminpannel/adminpannel.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ViewallpropertyComponent } from './home/viewallproperty/viewallproperty.component';
import { ViewsinglePropertyComponent } from './home/viewsingle-property/viewsingle-property.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { PropertyComponent } from './property/property.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Home', component: HomeComponent },
  {path:'admin', component:AdminpannelComponent },
  {path:'add-property', component:PropertyComponent },
  {path:'location', component:LocationComponent },
  {path:'aboutus', component:AboutusComponent },
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'addlocation',component:AddLocationComponent},
  {path:'viewallproperty',component:ViewallpropertyComponent},
  {path:'singleproperty',component:ViewsinglePropertyComponent},

  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
