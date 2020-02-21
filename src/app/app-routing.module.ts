import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Under8Component } from "./under8/under8.component";
import { Under10Component } from "./under10/under10.component";
import { Under12Component } from "./under12/under12.component";
import { Under14Component } from "./under14/under14.component";
import { Under16Component } from "./under16/under16.component";
import { Under18Component } from "./under18/under18.component";
import { FirstteamComponent } from "./firstteam/firstteam.component";
import { TopteamComponent } from "./topteam/topteam.component";
import { Over40Component } from "./over40/over40.component";

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
    {path: "under8", component: Under8Component},
    {path: "under10", component: Under10Component},
    {path: "under12", component: Under12Component},
    {path: "under14", component: Under14Component},
    {path: "under16", component: Under16Component},
    {path: "under18", component: Under18Component},
    {path: "firstteam", component: FirstteamComponent},
    {path: "topteam", component: TopteamComponent},
    {path: "over40", component: Over40Component},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
