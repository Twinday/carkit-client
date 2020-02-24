import { Component, OnInit } from '@angular/core';
import { IDetail, Detail } from './_models/detail-view';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: IDetail[] = [
    new Detail ({ name: 'asd'}),
    new Detail ({ name: 'zxc'})
  ];
  selectedDetail: IDetail;

  constructor() { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {

  }

  addDetail() {
    this.selectedDetail = new Detail({});
  }

  onFormClosed() {
    this.selectedDetail = null;
    this.getDetails();
  }

}
