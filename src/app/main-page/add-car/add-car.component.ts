import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICarCardView } from '../_model/cars-model';
import { CarCardService } from '../_services/car-card.service';
import { IResult } from 'src/app/_shared/models/get-result-model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carCards: ICarCardView[] = [];

  formGroup: FormGroup;

  constructor(private carCardService: CarCardService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddCarComponent>) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      carCardId: new FormControl(''),
      kilometrage: new FormControl('', [Validators.required])
    });

    this.getCarCard();
  }

  getCarCard() {
    this.carCardService.getAllByConfig<IResult<ICarCardView>>().subscribe(result => {
      this.carCards = result.items;
    })
  }

  close() {
    this.dialogRef.close();
  }

  add() {
    let value = this.formGroup.value;
    this.dialogRef.close({
      carCardId: value.carCardId.id,
      kilometrage: value.kilometrage,
      name: value.carCardId.name,
      producer: value.carCardId.producer,
      year: value.carCardId.year,
      modelCarId: value.carCardId.modelCarId
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  isValid() {
    return this.formGroup.valid;
  }

}
