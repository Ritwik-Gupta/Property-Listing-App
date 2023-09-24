import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {


  //Basic Details Tab
  buySellOptionsModel = 'Sell';
  BHKOptionsModel = '1'
  propertyTypeModel = 'House';
  furnishingTypeOptionsModel = 'Fully';

  //Other Details Tab
  readyToMoveOptionsModel = 'Yes';
  bsConfig?: Partial<BsDatepickerConfig> = Object.assign({}, { containerClass: 'theme-blue' });
  availaibleFromDate: Date;
  propertyAge: number = 5;

  onChangePropertyAgeSlider(event: any) {
    this.propertyAge = event.target.value;
  }

}
