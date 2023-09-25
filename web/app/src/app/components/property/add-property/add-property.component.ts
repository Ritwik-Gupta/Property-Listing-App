import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormGroup, FormControl, ValidatorFn, Validators, FormsModule } from '@angular/forms';
import { BasicInfo, IProperty, OtherDetails, PricingAndArea } from 'src/app/interfaces/iproperty';
import { DirectionFacing, FurnishingType, HouseSize, PropertyType, SellRent, YesNo } from 'src/app/interfaces/property-enums';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  //configuration
  bsConfig?: Partial<BsDatepickerConfig> = Object.assign({}, { containerClass: 'theme-blue' });

  //basic details form group
  basicDetailsForm =  new FormGroup({
    sellRent: new FormControl(SellRent.Rent),
    houseSize: new FormControl(HouseSize.TwoBHK),
    propertyType: new FormControl(PropertyType.Apartment),
    furnishingType: new FormControl(FurnishingType.Unfurnished),
    projectName: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required)
  })

  //#region getters for basicdetails form group
  get sellRent() {
    return this.basicDetailsForm.get("sellRent");
  }get houseSize() {
    return this.basicDetailsForm.get("houseSize");
  }get propertyType() {
    return this.basicDetailsForm.get("propertyType");
  }get furnishingType() {
    return this.basicDetailsForm.get("furnishingType");
  }get projectName() {
    return this.basicDetailsForm.get("projectName");
  }get city() {
    return this.basicDetailsForm.get("city");
  }get state() {
    return this.basicDetailsForm.get("state");
  }
  //#endregion

  //pricing and area details
  pricingAreaDetailsForm = new FormGroup({
    price: new FormControl("", Validators.required),
    security: new FormControl("", Validators.required),
    maintainance: new FormControl("", Validators.required),
    builtArea: new FormControl("", Validators.required),
    carpetArea: new FormControl("", Validators.required)
  })

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

  //other details form
  // otherDetails: OtherDetails = {
  //   isReadyToMove : YesNo.Yes,
  //   availableFrom : new Date("2022-03-25"),
  //   propertyAge : 9,
  //   isGated : YesNo.No,
  //   directionFacing : DirectionFacing.South
  // }

  otherDetailsForm = new FormGroup({
    isReadyToMove: new FormControl(YesNo.No, Validators.required),
    availableFrom: new FormControl(new Date("2022-03-25"), Validators.required),
    propertyAge: new FormControl(5, Validators.required),
    isGated: new FormControl(YesNo.Yes, Validators.required),
    directionFacing: new FormControl(DirectionFacing.East, Validators.required)
  })

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

  ngOnInit(): void {
    console.log(this.basicDetailsForm.value);
    console.log(this.otherDetailsForm.value);
    console.log(this.pricingAreaDetailsForm.value)
  }

  onChangePropertyAgeSlider(event: any) {
    this.otherDetailsForm.patchValue ({propertyAge: event.target.value});
  }

  //display property card
  // displayProperty: IProperty = {
  //   id: null,
  //   name: this.basicDetails.houseSize,
  //   type: this.basicDetails.propertyType,
  //   price: this.pricingAreaDetails.price,
  //   isReadytoMove: this.otherDetails.isReadyToMove,
  //   furnishingType: this.basicDetails.furnishingType,
  //   area : this.pricingAreaDetails.builtArea,
  //   address: [this.basicDetails.projectName, this.basicDetails.city, this.basicDetails.state].join(", ")
  // }
}
