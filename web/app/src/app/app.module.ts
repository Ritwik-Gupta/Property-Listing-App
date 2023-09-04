import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PropertyListComponent } from './components/property/property-list/property-list.component';
import { PropertyCardComponent } from './components/property/property-card/property-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
