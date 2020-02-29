import { Component, OnInit } from '@angular/core';
import { RepairShopService } from './service/repair-shop.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { IResult } from 'src/app/_shared/models/get-result-model';
import { IRepairShop } from '../_model/repair-shop-model';

@Component({
  selector: 'app-add-repair-shop',
  templateUrl: './add-repair-shop.component.html',
  styleUrls: ['./add-repair-shop.component.css']
})
export class AddRepairShopComponent implements OnInit {

  formGroup: FormGroup;

  repairShops: IRepairShop[] = [];
  times: string[] = [];

  constructor(private repairShopService: RepairShopService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddRepairShopComponent>) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      repairShopId: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required)
    });

    this.getRepairShops();

    this.formGroup.get('repairShopId').valueChanges.subscribe(result => {
      this.getFreeTime(result);
    })
  }

  getRepairShops() {
    this.repairShopService.getAll<IResult<IRepairShop>>().subscribe(result => {
      this.repairShops = result.items;
    });
  }

  getFreeTime(repairShopId: number) {
    this.repairShopService.getById<string[]>(`Time/${repairShopId}`).subscribe(result => {
      this.times = result;
    })
  }

  close() {
    this.dialogRef.close();
  }

  add() {
    this.dialogRef.close({
      repairShopId: this.formGroup.get('repairShopId').value,
      date: this.parseTime(),
      repairShopName: this.repairShops.filter(x => x.id === this.formGroup.get('repairShopId').value)[0].address
    });
  }

  parseTime(): Date {
    const time: string = this.formGroup.get('time').value;
    const hours = time.substring(0, 2);
    const minutes = time.substring(3);
    let date =  new Date();
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    date.setSeconds(0);
    return date;
  }

  hasError(controlName: string, errorName: string) {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  isValid() {
    return this.formGroup.valid;
  }

}
