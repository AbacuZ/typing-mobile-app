import { Component, OnInit } from '@angular/core';
import { session_1 } from 'src/utils';

@Component({
  selector: 'app-session-one-main',
  templateUrl: './session-one-main.component.html',
  styleUrls: ['./session-one-main.component.scss'],
})
export class SessionOneMainComponent implements OnInit {

  session1: any = session_1;

  constructor() { }

  ngOnInit() {
  }

  onClickSession(value: any) {
    console.log(value);
  }

}
