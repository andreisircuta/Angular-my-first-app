import { Component, OnInit } from '@angular/core';
import {timestamp} from 'rxjs/operators';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  showPassword: boolean = false;
  logs = [];
  constructor() { }

  ngOnInit(): void {
  }

  onButtonPressed(){
    this.showPassword = !this.showPassword;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }

}
