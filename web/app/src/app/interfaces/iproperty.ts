import { SellRent, FurnishingType, PropertyType, YesNo, DirectionFacing } from "./property-enums";
import { BHKType } from "./property-enums";

export interface IProperty extends BasicInfo, PricingAndArea, OtherDetails {
  id: number,
  name: string,
  address: string
}

export interface BasicInfo {
  sellRent: SellRent;
  houseSize: BHKType,
  propertyType: PropertyType,
  furnishingType: FurnishingType,
  projectName: string,
  city: string,
  state: string
}

export interface PricingAndArea {
  price: string,
  security: string,
  maintainance: string,
  builtArea: string,
  carpetArea: string
}

export interface OtherDetails {
  isReadyToMove: YesNo,
  availableFrom: Date,
  propertyAge: number,
  isGated: YesNo,
  directionFacing: DirectionFacing

}

