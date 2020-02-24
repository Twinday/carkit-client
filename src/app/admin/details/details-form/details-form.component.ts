import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { IDetail } from '../_models/detail-view';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IWork } from '../../works/models/work-view';
import { IProducerDetails } from '../../producer-details/models/producer-details-view';
import { WorksService } from '../../works/services/works.service';
import { ProducerDetailsService } from '../../producer-details/services/producer-details.service';
import { IResult } from 'src/app/_shared/models/get-result-model';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit, OnChanges {

  @Input() detail: IDetail;
  @Output() formClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  works: IWork[] = [];
  producerDetails: IProducerDetails[] = [];

  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private workService: WorksService,
              private producerDetailService: ProducerDetailsService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      workId: new FormControl('', Validators.required),
      producerDetailsId: new FormControl(''),
      producerDetailsWritten: new FormControl(''),
      trustLevel: new FormControl('')
    });

    this.workService.getAllByConfig<IResult<IWork>>().subscribe(result => {
      this.works = result.items;
    });

    this.producerDetailService.getAllByConfig<IResult<IProducerDetails>>().subscribe(result => {
      this.producerDetails = result.items;
    });

    this.updateDetail();
  }

  close() {
    this.formClosed.emit(true);
  }

  save() {

  }

  delete() {

  }

  ngOnChanges() {
    this.updateDetail();
  }

  updateDetail() {
    if (this.detail && this.formGroup) {
      this.formGroup.patchValue(this.detail);
    }
  }

  hasError(controlName: string, errorName: string) {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  isValid() {
    return this.formGroup.valid;
  }

}
