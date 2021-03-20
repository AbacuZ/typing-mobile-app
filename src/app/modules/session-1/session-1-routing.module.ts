import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionOneContentComponent } from './components/session-one-content/session-one-content.component';
import { SessionOneMainComponent } from './components/session-one-main/session-one-main.component';

const routes: Routes = [
  {
    path: 'session-main',
    component: SessionOneMainComponent,
  },
  {
    path: 'session-content',
    component: SessionOneContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Session1RoutingModule { }
