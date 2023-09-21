import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PropertyListComponent } from './components/property/property-list/property-list.component';
import { PropertyCardComponent } from './components/property/property-card/property-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { BuyPropertyComponent } from './components/property/buy-property/buy-property.component';
import { SellPropertyComponent } from './components/property/sell-property/sell-property.component';
import { ViewPropertyComponent } from './components/property/view-property/view-property.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AddPropertyComponent } from './components/property/add-property/add-property.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  {path: "", component: PropertyListComponent},
  {path: "buy-property", component: BuyPropertyComponent},
  {path: "sell-property", component: SellPropertyComponent},
  {path: "view-property/:id", component: ViewPropertyComponent},
  {path: "post-ad", component: AddPropertyComponent},
  {path: "user-login", component: UserLoginComponent},
  {path: "user-register", component: UserRegisterComponent},
  {path: "**", component: ErrorPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
    NavBarComponent,
    BuyPropertyComponent,
    SellPropertyComponent,
    ViewPropertyComponent,
    ErrorPageComponent,
    AddPropertyComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [HousingService, UserService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log("test1");
    debugger;
    //check if user is logged in, otherwise route to login page
    if(this.authService.isLoggedIn()) {
      this.router.navigate([""])
    }
    else {
      this.router.navigate(["user-login"])
    }
  }
}
