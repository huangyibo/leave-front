import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CitySelectService} from "./city-select.service";
import {IMitAddress} from "./city-select.model";

@Component( {
  selector: 'app-mit-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: [ './city-select.component.css' ]
})
export class CitySelectComponent implements OnInit {
  @Output() result = new EventEmitter();
  @Input() selected: string;
  public isExpand: Boolean = false;
  public list: Array<any>;
  constructor( private citySelectService: CitySelectService ) { }

  ngOnInit() {
    this.citySelectService.getAddress().subscribe(( res ) => {
      this.list = res;
      console.log(this.list);
    });
  }

  selectHandle( province: IMitAddress, city: IMitAddress, district: IMitAddress ) {
    this.isExpand = false;
    this.selected = province + '/' + city + '/' + district;
    this.result.emit( this.selected );
  }


}
