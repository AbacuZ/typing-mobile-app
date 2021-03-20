import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Session1RoutingModule } from './session-1-routing.module';
import { SessionOneMainComponent } from './components/session-one-main/session-one-main.component';


@NgModule({
  declarations: [
    SessionOneMainComponent
  ],
  imports: [
    CommonModule,
    Session1RoutingModule
  ]
})
export class Session1Module { }
