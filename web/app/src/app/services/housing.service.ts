import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { IProperty } from '../interfaces/iproperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {


  constructor(private httpclient: HttpClient) { }

  getProperties() {
    return this.httpclient.get('/data/properties.json').pipe(
      map((data: any) => {
        const propertyArray = [];
        for(const item of data) {
          propertyArray.push(item)
        }
        return propertyArray;
      })
    );
  }

  saveProperty(property: IProperty) {
    let properties = JSON.parse(localStorage.getItem("properties"));
    debugger;
    if(properties) {
      properties.push(property);
    }
    else {
      properties = [property];
    }
    localStorage.setItem("properties", JSON.stringify(property));
  }
}
