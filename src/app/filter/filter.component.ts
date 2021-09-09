import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ListCars} from '../shared/list-cars.service';
import {BrandsCarsService} from '../shared/brands-cars.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [BrandsCarsService, ListCars]
})

export class FilterComponent implements OnInit {
  constructor(
    private brandsCars: BrandsCarsService,
    private listCars: ListCars
  ) { }
  brandName = {};
  cars = [];
  models = [];
  isDisabled = true;
  public selectedBrand;

  form = new FormGroup({
    brand: new FormControl('', [Validators.required]),
    model: new FormControl(),
    age: new FormControl()
  });

  ngOnInit(): void {
    this.brandName = this.brandsCars.brandsName;
    this.cars = this.listCars.cars;
  }

  submit(){
    console.log(this.form.value);
  }

  public valueSelected(){
      this.models = [];
      this.cars = this.listCars.cars.filter(
        (item) => {
          if (item.brand === this.selectedBrand) {
            this.models.push(item.model);
          }
        }
      );
  }
}
