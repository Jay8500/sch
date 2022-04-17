import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css'],
})
export class MastersComponent implements OnInit {
  public dt:any = '03-Apr-2022 - 10-Apr-2022';
  activeState: boolean[] = [true, false, false, false];
  constructor(private _dt: DatePipe) {}

  ngOnInit(): void {
    // this.dt = this._dt.transform(new Date('03-Apr-2022 - 10-Apr-2022'),'dd-MMM-yyyy')
  }

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }
}
