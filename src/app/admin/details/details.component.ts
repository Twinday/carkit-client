import { Component, OnInit } from '@angular/core';
import { IDetail, Detail } from './_models/detail-view';
import { DetailsService } from './_services/details.service';
import { IResult } from 'src/app/_shared/models/get-result-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: IDetail[] = [];
  selectedDetail: IDetail;

  constructor(private detailService: DetailsService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.detailService.getAllByConfig<IResult<IDetail>>().subscribe(result => {
      this.details = result.items;
    });
  }

  onDetailClick(index: number) {
    this.selectedDetail = this.details[index];
  }

  addDetail() {
    this.selectedDetail = new Detail({});
  }

  onFormClosed() {
    this.selectedDetail = null;
    this.getDetails();
  }

}
