import { Component, OnInit } from '@angular/core';
import { ListCars } from '../shared/list-cars.service'
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [ListCars]
})
export class TableComponent implements OnInit {
  cars = [];
  constructor(
    private listCars: ListCars
  ) { }


  ngOnInit(): void {
    this.cars = this.listCars.cars;
  }

}
