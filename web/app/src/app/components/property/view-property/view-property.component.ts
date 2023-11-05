import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { } from 'googlemaps';
import { IProperty } from 'src/app/interfaces/iproperty';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit, AfterViewInit {
  @ViewChild("map") mapElement: any;
  map: google.maps.Map;

  public propertyId: number;
  public filteredProperty: IProperty;

  constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) { }

  ngOnInit(): void {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.propertyId = +params['id'];
    })

    this.housingService.getProperties().subscribe(data => {
      this.filteredProperty = data.filter(property => property.id == this.propertyId)[0];
      debugger;
    })
  }

  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(28.562, 77.390),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

  // codeAddress() {
  //   var geocoder = new google.maps.Geocoder();
  //   var address = document.getElementById('address').value;
  //   geocoder.geocode( { 'address': address}, function(results, status) {
  //     if (status == 'OK') {
  //       map.setCenter(results[0].geometry.location);
  //       var marker = new google.maps.Marker({
  //           map: map,
  //           position: results[0].geometry.location
  //       });
  //     } else {
  //       alert('Geocode was not successful for the following reason: ' + status);
  //     }
  //   });
  // }
}
