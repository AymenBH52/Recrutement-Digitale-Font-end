import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { FormControlDirective, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ListCategorieComponent } from './components/categorie/list-categorie/list-categorie.component';
import { CommonModule } from '@angular/common';
import { AddOffreComponent } from './components/offre/add-offre/add-offre.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminListOffreComponent } from './components/offre/admin-list-offre/admin-list-offre.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCategorieComponent,
    AdminSidebarComponent,
    TopBarComponent,
    ListCategorieComponent,AddOffreComponent,AdminListOffreComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
