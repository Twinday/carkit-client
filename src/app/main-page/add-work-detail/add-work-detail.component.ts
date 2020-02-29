import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IWorkSearchResult, WorkDetailConfig, IWorkListView, IDetailListView } from '../_model/work-details-model';
import { ICarInput } from '../_model/cars-model';
import { WorkDetailService } from './service/work-detail.service';
import { IUnit } from '../_model/unit-model';
import { UnitService } from './service/unit.service';
import { IResult } from 'src/app/_shared/models/get-result-model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LinkedOrderDetail, ILinkedOrderDetail } from '../_model/linked-order-detail-model';

@Component({
  selector: 'app-add-work-detail',
  templateUrl: './add-work-detail.component.html',
  styleUrls: ['./add-work-detail.component.css']
})
export class AddWorkDetailComponent implements OnInit {

  worksForCar: IWorkListView[];
  otherWorks: IWorkListView[];
  units: IUnit[] = [];

  modelCarId: number;
  kilometrage: number;

  formGroup: FormGroup;

  selectedDetails: ILinkedOrderDetail[] = [];

  constructor(private dialogRef: MatDialogRef<AddWorkDetailComponent>,
              private workDetailService: WorkDetailService,
              private unitService: UnitService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: ICarInput) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      unitId: new FormControl('', Validators.required),
      count: new FormControl('1', Validators.required)
    });

    this.modelCarId = this.data.modelCarId;
    this.kilometrage = this.data.kilometrage;
    this.getWorkDetail();
    this.getUnits();
  }

  getWorkDetail() {
    let config = new WorkDetailConfig();
    config.modelCarId = this.modelCarId;
    config.kilometrage = this.kilometrage;
    this.workDetailService.getAllByConfig<IWorkSearchResult>(config).subscribe(result => {
      this.worksForCar = result.worksForCar;
      this.otherWorks = result.otherWorks;
    });
  }

  getUnits() {
    this.unitService.getAll<IResult<IUnit>>().subscribe(result => {
      this.units = result.items;
      if (this.formGroup) {
        this.formGroup.patchValue({
          unitId: this.units[0].id
        });
      }
    })
  }

  close() {
    this.dialogRef.close();
  }

  add() {
    this.dialogRef.close(this.selectedDetails);
  }

  // 0 - recomended
  // 1 - other
  onDetailClick(i: number, j: number, worksType: number) {
    let pushDetail = new LinkedOrderDetail({});

    let selectDetail = worksType === 0 ? this.worksForCar[i].details[j] : this.otherWorks[i].details[j];
    pushDetail.detailId = selectDetail.id;
    pushDetail.unitId = this.formGroup.get('unitId').value;
    pushDetail.count = this.formGroup.get('count').value;
    pushDetail.detailName = selectDetail.name;
    pushDetail.unitName = this.units.filter(x => x.id === pushDetail.unitId)[0].name;

    this.selectedDetails.push(pushDetail);
  }

  hasError(controlName: string, errorName: string) {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  isValid() {
    return this.selectedDetails.length > 0;
  }

}
