import { Component, OnInit, Input } from '@angular/core';
import { IProperty } from 'src/app/interfaces/iproperty';
import { IPropertyPreview } from 'src/app/interfaces/iproperty-preview';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent{
  @Input() property: IPropertyPreview;
  @Input() isPropertyPreview: boolean;
}
