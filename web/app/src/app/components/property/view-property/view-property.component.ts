import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  public propertyId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(params => {
      this.propertyId = +params['id'];
    })
  }

  OnSelectNextPage(): void {
    debugger;
    this.propertyId = this.propertyId + 1;
    this.router.navigate(['view-property', this.propertyId]);
  }

  OnSelectPrevPage(): void {
    debugger;
    this.propertyId = this.propertyId - 1;
    this.router.navigate(['view-property', this.propertyId]);
  }

}
