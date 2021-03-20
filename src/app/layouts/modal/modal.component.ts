import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '@app/core';
import { Subscription } from 'rxjs';
import * as $ from "jquery";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  header: any = null;
  content: any = null;
  buttonContent: any = null;
  dangerStyle: Boolean = false;
  normalStyle: Boolean = false;
  isButtonEnabled: Boolean = false;
  subscription: Subscription;

  constructor(
    private modalService: ModalService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.modalService.getModal().observers.length === 0) {
      this.subscription = this.modalService.getModal().subscribe((result: any) => {
        this.dangerStyle = result.dangerStyle;
        this.normalStyle = result.normalStyle;
        this.isButtonEnabled = result.isButtonEnabled;
        this.buttonContent = result.buttonContent;
        this.header = result.header;
        this.content = result.content;
        this.openModal();
      });
    }
  }

  openModal() {
    $('.open-modal').click();
  }

  closeModal(event: any) {
    const path = this.modalService.getRoute();
    if (path) {
      this.router.navigate([path]);
    }
    this.modalService.resetModal();
  }

  clickButton(event: any) {
    const path = this.modalService.getButtonRoute();
    if (path) {
      this.router.navigate([path]);
    }
    this.modalService.resetModal();
  }

}
