import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminpannelComponent } from './adminpannel/adminpannel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PropertyComponent } from './property/property.component';
import { LocationComponent } from './location/location.component';
import {MatTableModule} from '@angular/material/table';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewallpropertyComponent } from './home/viewallproperty/viewallproperty.component';
import { ViewsinglePropertyComponent } from './home/viewsingle-property/viewsingle-property.component';
import { LoginComponent } from './login/login.component';
import { FilterPipe } from './_services/filter';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { EditLocationComponent } from './location/edit-location/edit-location.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DemoMaterialModule } from './material';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    ProjectsComponent,
    AdminpannelComponent,
    SidebarComponent,
    PropertyComponent,
    LocationComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    AddLocationComponent,
    ViewallpropertyComponent,
    ViewsinglePropertyComponent,
    FilterPipe,
    LoginComponent,
    EditLocationComponent,
    TestcomponentComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatToolbarModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
