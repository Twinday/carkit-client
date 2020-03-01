import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCarComponent } from './add-car/add-car.component';
import { ICarInput, Car, ICar } from './_model/cars-model';
import { AddWorkDetailComponent } from './add-work-detail/add-work-detail.component';
import { IDetailListView, TimePeriodSearchData } from './_model/work-details-model';
import { ILinkedOrderDetail } from './_model/linked-order-detail-model';
import { AddRepairShopComponent } from './add-repair-shop/add-repair-shop.component';
import { IRepairShopInput } from './_model/repair-shop-model';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { DetailsTimePeriodService } from './_services/details-time-period.service';
import { IUser } from '../admin/details/_models/user-model';
import { CarService } from './_services/car.service';
import { Order, IOrder } from './_model/order-model';
import { OrderService } from './_services/order.service';

export enum StepsChoose {
  CAR = "car",
  DETAIL = "detail",
  REPAIR_SHOP = "repairShop",
  PHONE = "phone",
  ORDER = "order"
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  carInput: ICarInput;
  car: ICar;
  details: ILinkedOrderDetail[];
  repairShopInput: IRepairShopInput;
  timePeriod: number;
  user: IUser;

  constructor(private dialog: MatDialog,
              private detailsTimePeriodService: DetailsTimePeriodService,
              private carService: CarService,
              private orderService: OrderService) { }

  ngOnInit() {
  }

  stepCar = StepsChoose.CAR;
  stepDetail = StepsChoose.DETAIL;
  stepRepairShop = StepsChoose.REPAIR_SHOP;
  stepPhone = StepsChoose.PHONE;
  stepOrder = StepsChoose.ORDER;

  showStep(step: StepsChoose) {
    switch(step) {
      case StepsChoose.CAR: return true;
      case StepsChoose.DETAIL: return this.carInput != null;
      case StepsChoose.REPAIR_SHOP: return this.carInput != null && this.details != null;
      case StepsChoose.PHONE: return this.carInput != null && this.details != null && this.repairShopInput != null;
      case StepsChoose.ORDER: return this.carInput != null && this.details != null && this.repairShopInput != null && this.user != null;
    }
  }

  addCarCard() {
    this.dialog.open(AddCarComponent, {
      height: '400px',
      width: '600px'}).afterClosed().subscribe(result => {
        if (result) {
          this.carInput = result;
          this.createCar();
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
          this.getTimePeriod();
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
        this.user = result;
        this.updateCar();
      }
    });
  }

  addOrder() {
    let order = new Order({});
    console.log(this.car);
    order.carId = this.car.id;
    order.repairShopId = this.repairShopInput.repairShopId;
    order.date = this.repairShopInput.date;
    order.timePeriod = this.timePeriod;
    // To Do: высчитать стоимость заказа.
    order.cost = 0;
    order.linkedOrderDetails = this.details;
    console.log(order);

    this.orderService.create<IOrder>(order).subscribe(result => {
      
    });
  }

  getTimePeriod() {
    let config = new TimePeriodSearchData();
    config.modelCarId = this.carInput.modelCarId;
    config.details = this.details;
    this.detailsTimePeriodService.getAllByConfig<number>(config).subscribe(result => {
      this.timePeriod = result;
    });
  }

  createCar() {
    this.car = new Car({});
    this.car.carCardId = this.carInput.carCardId;
    this.car.kilometrage = this.carInput.kilometrage;
    this.carService.create<ICar>(this.car).subscribe(result => {
      this.car = result;
    });
  }

  updateCar() {
    this.car.userId = this.user.id;
    this.carService.edit<ICar>(this.car.id.toString(), this.car).subscribe(result => {
      //this.car = result;
    });
  }

}
