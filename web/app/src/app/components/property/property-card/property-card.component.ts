import { Component, OnInit, Input } from '@angular/core';
import { IProperty } from 'src/app/interfaces/iproperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit{
  @Input() property: IProperty;


  furnishingType: string;
  isReadytoMove: boolean;

  constructor() { }

  ngOnInit(): void {

    //setting furnishing type
    if(this.property.furnishingType == "Semi") {
      this.furnishingType = "Semi Furnished";
    }
    else if(this.property.furnishingType == "Fully") {
      this.furnishingType = "Fully Furnished";
    }
    else {
      this.furnishingType = this.property.furnishingType;
    }


    //setting IsReadytoMove field
    this.isReadytoMove = this.property.isReadytoMove == "Yes" ? true : false;
  }
}
