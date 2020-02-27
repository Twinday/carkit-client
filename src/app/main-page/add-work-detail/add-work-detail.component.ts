import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IWorkSearchResult, WorkDetailConfig, IWorkListView, IDetailListView } from '../_model/work-details-model';
import { ICarInput } from '../_model/cars-model';
import { WorkDetailService } from './service/work-detail.service';

@Component({
  selector: 'app-add-work-detail',
  templateUrl: './add-work-detail.component.html',
  styleUrls: ['./add-work-detail.component.css']
})
export class AddWorkDetailComponent implements OnInit {

  worksForCar: IWorkListView[];
  otherWorks: IWorkListView[];

  modelCarId: number;
  kilometrage: number;

  selectedDetails: IDetailListView[] = [];

  constructor(private dialogRef: MatDialogRef<AddWorkDetailComponent>,
              private workDetailService: WorkDetailService,
              @Inject(MAT_DIALOG_DATA) private data: ICarInput) { }

  ngOnInit() {
    this.modelCarId = this.data.modelCarId;
    this.kilometrage = this.data.kilometrage;
    this.getWorkDetail();
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

  close() {
    this.dialogRef.close();
  }

  add() {
    this.dialogRef.close(this.selectedDetails);
  }

  // 0 - recomended
  // 1 - other
  onDetailClick(i: number, j: number, worksType: number) {
    if (worksType === 0) {
      this.selectedDetails.push(this.worksForCar[i].details[j]);
    } else {
      this.selectedDetails.push(this.otherWorks[i].details[j]);
    }
  }

  isValid() {
    return this.selectedDetails.length > 0;
  }

}
