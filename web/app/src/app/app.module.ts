import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastrModule } from 'ngx-toastr';
import { UploadImagePreviewComponent } from './components/helper-components/upload-image-preview/upload-image-preview.component';

const appRoutes: Routes = [
  {path: "", component: UserLoginComponent},
  {path: "dashboard", component: PropertyListComponent},
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
    UploadImagePreviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [HousingService, UserService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
