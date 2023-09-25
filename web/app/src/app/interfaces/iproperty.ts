import { SellRent, FurnishingType, PropertyType, YesNo, DirectionFacing } from "./property-enums";
import { HouseSize } from "./property-enums";

export interface IProperty {
  id: number,
  name: string,
  type: string,
  price: string,
  isReadytoMove: string,
  furnishingType: string
  address: string,
  area: string,
}

export interface BasicInfo {
  sellRent: SellRent;
  houseSize: HouseSize,
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

