import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/interfaces/iproperty';
import { SellRent } from 'src/app/interfaces/property-enums';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-rent-property',
  templateUrl: './rent-property.component.html',
  styleUrls: ['./rent-property.component.css']
})
export class RentPropertyComponent implements OnInit {

  properties: Array<IProperty>;

  constructor(public housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getProperties().subscribe(data => {
      debugger;
      this.properties = data.filter((property:IProperty) => property.sellRent == SellRent.Rent)
    })
  }
}
