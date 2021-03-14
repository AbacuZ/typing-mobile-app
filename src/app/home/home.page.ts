import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private keyboard: Keyboard) { }

  onEventChange(event: any) {
    console.log(event.target.value);
  }

  keyboardShow() {
    this.keyboard.hide();
  }

}
