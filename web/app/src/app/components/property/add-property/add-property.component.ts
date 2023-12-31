import { Component, OnInit, ViewChild } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormGroup, FormControl, ValidatorFn, Validators, FormsModule } from '@angular/forms';
// import { BasicInfo, IProperty, OtherDetails, PricingAndArea } from 'src/app/interfaces/iproperty';
import { DirectionFacing, FurnishingType, BHKType, PropertyType, SellRent, YesNo } from 'src/app/interfaces/property-enums';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyPreview } from 'src/app/interfaces/iproperty-preview';
import { ToastrService } from 'ngx-toastr';
import { IProperty } from 'src/app/interfaces/iproperty';
import { HousingService } from 'src/app/services/housing.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})

export class AddPropertyComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  activeTabId = 1
  activeTabName = 'tab1';
  IsPropertyPreview = true;
  finalPropertyObject: IProperty;
  UploadedImages: Array<string> = [];

  //navigation button flags
  prevButton: boolean;
  nextButton: boolean;
  submitButton: boolean;

  //configuration
  bsConfig?: Partial<BsDatepickerConfig> = Object.assign({}, { containerClass: 'theme-blue' });

  //#region  Basic Detils
  //basic details form group
  basicDetailsForm =  new FormGroup({
    sellRent: new FormControl(SellRent.Rent),
    houseSize: new FormControl(BHKType.TwoBHK),
    propertyType: new FormControl(PropertyType.Apartment),
    furnishingType: new FormControl(FurnishingType.Unfurnished),
    propertyName: new FormControl("", Validators.required),
    streetAddress: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required)
  })
  //#endregion

  //#region Pricing and Area Details
  //pricing and area details
  pricingAreaDetailsForm = new FormGroup({
    price: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
    security: new FormControl("", [Validators.pattern("^[0-9]*$")]),
    maintainance: new FormControl("", [Validators.pattern("^[0-9]*$")]),
    builtArea: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
    carpetArea: new FormControl("", [Validators.pattern("^[0-9]*$")])
  })
  //#endregion

  //#region Address Details
  //Address details form
  addressDetailsForm = new FormGroup({
    addressL1: new FormControl("", Validators.required),
    addressL2: new FormControl(""),
    city: new FormControl("", Validators.required),
    pincode: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required)
  })
  //#endregion

  //#region Other Details Form
  //other details form
  otherDetailsForm = new FormGroup({
    isReadyToMove: new FormControl(YesNo.No, Validators.required),
    availableFrom: new FormControl(new Date("2022-03-25"), Validators.required),
    propertyAge: new FormControl(5, Validators.required),
    isGated: new FormControl(YesNo.Yes, Validators.required),
    directionFacing: new FormControl(DirectionFacing.East, Validators.required)
  })
  //#endregion


  //#region getters for basicdetails form group
  get sellRent() {
    return this.basicDetailsForm.get("sellRent");
  }get houseSize() {
    return this.basicDetailsForm.get("houseSize");
  }get propertyType() {
    return this.basicDetailsForm.get("propertyType");
  }get furnishingType() {
    return this.basicDetailsForm.get("furnishingType");
  }get propertyName() {
    return this.basicDetailsForm.get("propertyName");
  }get streetAddress() {
    return this.basicDetailsForm.get("streetAddress");
  }get city() {
    return this.basicDetailsForm.get("city");
  }get state() {
    return this.basicDetailsForm.get("state");
  }
  //#endregion

  //#region getters for pricing and area form
  get price() {
    return this.pricingAreaDetailsForm.get("price");
  }get security() {
    return this.pricingAreaDetailsForm.get("security");
  }get maintainance() {
    return this.pricingAreaDetailsForm.get("maintainance");
  }get builtArea() {
    return this.pricingAreaDetailsForm.get("builtArea");
  }get carpetArea() {
    return this.pricingAreaDetailsForm.get("carpetArea");
  }
  //#endregion

  //#region getters for Address details form
  get addressL1() {
    return this.addressDetailsForm.get("addressL1");
  }get addressL2() {
    return this.addressDetailsForm.get("addressL2");
  }get cityA() {
    return this.addressDetailsForm.get("city");
  }get pincode() {
    return this.addressDetailsForm.get("pincode");
  }get stateA() {
    return this.addressDetailsForm.get("state");
  }get country() {
    return this.addressDetailsForm.get("country");
  }
  //#endregion

  //#region getters for other details form
  get isReadyToMove() {
    return this.otherDetailsForm.get("isReadyToMove")
  }get availableFrom() {
    return this.otherDetailsForm.get("availableFrom")
  }get propertyAge() {
    return this.otherDetailsForm.get("propertyAge")
  }get isGated() {
    return this.otherDetailsForm.get("isGated")
  }get directionFacing() {
    return this.otherDetailsForm.get("directionFacing")
  }
  //#endregion


  constructor(private toastr: ToastrService, private housingService: HousingService, private router:Router) {}

  ngOnInit(): void {
    this.setNavigationButtonStatus(this.activeTabName);
    this.basicDetailsForm.valueChanges.subscribe(data => {
      this.onFormDataChanges(data)
    });
    this.pricingAreaDetailsForm.valueChanges.subscribe(data => {
      this.onFormDataChanges(data);
    });
    this.otherDetailsForm.valueChanges.subscribe(data => {
      this.onFormDataChanges(data);
    });
  }

  //property preview card
  propertyPreview : IPropertyPreview = {
    houseSize: this.houseSize?.value,
    propertyType: this.propertyType?.value,
    propertyName: this.propertyName?.value,
    streetAddress: this.streetAddress?.value,
    furnishingType: this.furnishingType?.value,
    isReadyToMove: this.isReadyToMove?.value,
    askPrice: this.price?.value,
    totalArea: this.builtArea?.value
  }


  onFormDataChanges(data: any) {
    debugger;
    this.propertyPreview.houseSize = data.houseSize ?? this.propertyPreview.houseSize;
    this.propertyPreview.propertyType = data.propertyType ?? this.propertyPreview.propertyType;
    this.propertyPreview.propertyName = data.propertyName ?? this.propertyPreview.propertyName;
    this.propertyPreview.streetAddress = data.streetAddress ?? this.propertyPreview.streetAddress;
    this.propertyPreview.furnishingType = data.furnishingType ?? this.propertyPreview.furnishingType;
    this.propertyPreview.isReadyToMove = data.isReadyToMove ?? this.propertyPreview.isReadyToMove;
    this.propertyPreview.askPrice = data.price ?? this.propertyPreview.askPrice;
    this.propertyPreview.totalArea = data.builtArea ?? this.propertyPreview.totalArea;
  }

  navigateTabs(action:string) {
    debugger;
    this.activeTabName = this.staticTabs.tabs.find(x => x.active).id; //tab1
    this.activeTabId = Number(this.activeTabName.slice(-1))-1;
    switch(action) {
      case "next":
        this.activeTabId += 1;
        this.staticTabs.tabs[this.activeTabId].active = true;
        break;
      case "prev":
        this.activeTabId -= 1;
        this.staticTabs.tabs[this.activeTabId].active = true;
        break;
      default:
        break;
    }
    this.activeTabName = this.staticTabs.tabs[this.activeTabId].id;
    this.setNavigationButtonStatus(this.activeTabName);
  }

  onChangePropertyAgeSlider(event: any) {
    this.otherDetailsForm.patchValue ({propertyAge: event.target.value});
  }

  //rules for enabling/disabling the prev/next/submit buttons
  //setting the active tab
  setNavigationButtonStatus(activeTab: string){
    debugger;
    switch(activeTab) {
      case "tab1":
        this.prevButton = false;
        this.nextButton = true;
        this.submitButton = false;
        break;
      case "tab5":
        this.prevButton = true;
        this.nextButton = false;
        this.submitButton = true;
        break;
      default:
        this.prevButton = true;
        this.nextButton = true;
        this.submitButton = false;
    }
  }

  onImageUpload(upoadedImages: Array<string>) {
    // console.log(upoadedImages);
    this.UploadedImages = upoadedImages;
  }

  onSubmitForm() {
    debugger;
    if(this.basicDetailsForm.valid && this.pricingAreaDetailsForm.valid &&
      this.addressDetailsForm.valid && this.otherDetailsForm.valid) {

        this.finalPropertyObject = {
          id: null,
          propertyName: this.propertyName.value,
          fullAddress: [this.addressL1.value, this.addressL2.value, this.cityA.value, "Pin - " + this.pincode.value, this.stateA.value, this.country.value].join(", "),
          sellRent: this.sellRent.value,
          houseSize: this.houseSize.value,
          propertyType: this.propertyType.value,
          furnishingType: this.furnishingType.value,
          city: this.city.value,
          state: this.state.value,
          price: this.price.value,
          security: this.security.value,
          maintainance: this.maintainance.value,
          builtArea: this.builtArea.value,
          carpetArea: this.carpetArea.value,
          isReadyToMove: this.isReadyToMove.value,
          availableFrom: this.availableFrom.value,
          propertyAge: this.propertyAge.value,
          isGated: this.isGated.value,
          directionFacing: this.directionFacing.value,
          images: this.UploadedImages
        }
        debugger;
        this.housingService.saveProperty(this.finalPropertyObject);
        this.toastr.success("Property Listing Added!");
        this.router.navigate(["dashboard"]);
      }
    else {
      this.toastr.warning("Kindly fill out all the mandatory fields");
    }
  }
}
