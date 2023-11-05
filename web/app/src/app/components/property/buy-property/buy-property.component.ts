import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/interfaces/iproperty';
import { HousingService } from 'src/app/services/housing.service';
import { SellRent } from 'src/app/interfaces/property-enums';

@Component({
  selector: 'app-buy-property',
  templateUrl: './buy-property.component.html',
  styleUrls: ['./buy-property.component.css']
})

export class BuyPropertyComponent implements OnInit {

  properties: Array<IProperty>;

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    debugger;
    this.housingService.getProperties().subscribe(data => {
      this.properties = data.filter(property => property.sellRent == SellRent.Sell)
    })
  }
}
