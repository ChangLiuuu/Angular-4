import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  userName = '';
  clickStatus;

  constructor() {
    this.clickStatus = false;
  }

  ngOnInit() {
  }

  click() {
    if (this.userName == '') {
      return false;
    } else {
      return true;
    }
  }

  resetMethod() {
    this.userName = '';

  }
}
