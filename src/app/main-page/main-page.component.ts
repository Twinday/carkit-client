import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCarComponent } from './add-car/add-car.component';
import { ICarInput } from './_model/cars-model';
import { AddWorkDetailComponent } from './add-work-detail/add-work-detail.component';
import { IDetailListView } from './_model/work-details-model';

export enum StepsChoose {
  CAR = "car",
  DETAIL = "detail"
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  carInput: ICarInput;
  details: IDetailListView[];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  stepCar = StepsChoose.CAR;
  stepDetail = StepsChoose.DETAIL;

  showStep(step: StepsChoose) {
    switch(step) {
      case StepsChoose.CAR: return true;
      case StepsChoose.DETAIL: return this.carInput != null;
    }
  }

  addCarCard() {
    this.dialog.open(AddCarComponent, {
      height: '400px',
      width: '600px'}).afterClosed().subscribe(result => {
        if (result) {
          this.carInput = result;
        }
    });
  }

  addDetails() {
    this.dialog.open(AddWorkDetailComponent, {
      //height: '400px',
      width: '600px',
      data: this.carInput }).afterClosed().subscribe(result => {
        if (result) {
          this.details = result;
        }
    });
  }

}
