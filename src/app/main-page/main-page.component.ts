import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCarComponent } from './add-car/add-car.component';
import { ICarInput } from './_model/cars-model';
import { AddWorkDetailComponent } from './add-work-detail/add-work-detail.component';
import { IDetailListView } from './_model/work-details-model';
import { ILinkedOrderDetail } from './_model/linked-order-detail-model';
import { AddRepairShopComponent } from './add-repair-shop/add-repair-shop.component';
import { IRepairShopInput } from './_model/repair-shop-model';
import { AddPhoneComponent } from './add-phone/add-phone.component';

export enum StepsChoose {
  CAR = "car",
  DETAIL = "detail",
  REPAIR_SHOP = "repairShop",
  PHONE = "phone"
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  carInput: ICarInput;
  details: ILinkedOrderDetail[];
  repairShopInput: IRepairShopInput;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  stepCar = StepsChoose.CAR;
  stepDetail = StepsChoose.DETAIL;
  stepRepairShop = StepsChoose.REPAIR_SHOP;
  stepPhone = StepsChoose.PHONE;

  showStep(step: StepsChoose) {
    switch(step) {
      case StepsChoose.CAR: return true;
      case StepsChoose.DETAIL: return this.carInput != null;
      case StepsChoose.REPAIR_SHOP: return this.carInput != null && this.details != null;
      case StepsChoose.PHONE: return this.carInput != null && this.details != null && this.repairShopInput != null;
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

  addRepairShop() {
    this.dialog.open(AddRepairShopComponent, {
      height: '400px',
      width: '600px'}).afterClosed().subscribe(result => {
        if (result) {
          this.repairShopInput = result;
        }
    });
  }

  addPhone() {
    this.dialog.open(AddPhoneComponent).afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

}
