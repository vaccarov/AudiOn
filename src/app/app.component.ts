import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data-service.service';
import {Data} from './models/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public datas: Data[];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((datas: Data[]) => {
      this.datas = datas;
    });
  }
}
