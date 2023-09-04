import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { IProperty } from '../interfaces/iproperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {


  constructor(private housingService: HttpClient) { }

  getProperties() {
      return this.housingService.get('/data/properties.json').pipe(
        map((data: any) => {
          const propertyArray = [];
          for(const item of data) {
            propertyArray.push(item)
          }
          return propertyArray;
        })
      );
  }
}
