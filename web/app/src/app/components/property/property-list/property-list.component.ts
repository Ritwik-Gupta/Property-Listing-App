import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from 'src/app/interfaces/iproperty';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  properties: Array<IProperty> = [];

  constructor(private service: HousingService) { }

  ngOnInit(): void {
    this.service.getProperties().subscribe(data => {
      this.properties = data;
    })
  }
}
