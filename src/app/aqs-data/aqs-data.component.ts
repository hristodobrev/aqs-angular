import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aqs-data',
  templateUrl: './aqs-data.component.html',
  styleUrls: ['./aqs-data.component.scss']
})
export class AqsDataComponent {
  constructor (private service: DataService) {
    this.service.getData().subscribe(console.log);
  }
}
