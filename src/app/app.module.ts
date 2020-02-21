import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule,MatIconModule,MatCardModule} from '@angular/material';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Under8Component } from './under8/under8.component';
import { Under10Component } from './under10/under10.component';
import { Under12Component } from './under12/under12.component';
import { Under14Component } from './under14/under14.component';
import { Under16Component } from './under16/under16.component';
import { Under18Component } from './under18/under18.component';
import { FirstteamComponent } from './firstteam/firstteam.component';
import { TopteamComponent } from './topteam/topteam.component';
import { Over40Component } from './over40/over40.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    Under8Component,
    Under10Component,
    Under12Component,
    Under14Component,
    Under16Component,
    Under18Component,
    FirstteamComponent,
    TopteamComponent,
    Over40Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
