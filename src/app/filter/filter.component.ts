import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ListCars} from '../shared/list-cars.service';
import {BrandsCarsService} from '../shared/brands-cars.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [BrandsCarsService, ListCars]
})

export class FilterComponent implements OnInit {
  constructor(
    private brandsCars: BrandsCarsService,
    private listCars: ListCars,
    private router: Router
  ) { }
  brandName = {};
  cars = [];
  models = [];
  isDisabled = true;
  public selectedBrand;
  public selectedModel;
  public selectedAge;

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
    this.router.navigate([], { queryParams: { brand: `${this.selectedBrand}`, model: `${this.selectedModel}`, age: `${this.selectedAge}`}});
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
