import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  session: any;

  constructor(private keyboard: Keyboard, private router: Router) { }

  ngOnInit() {
  }

  onEventChange(event: any) {
    console.log(event.target.value);
  }

  keyboardShow() {
    this.keyboard.hide();
  }

  onSelectSession(session: any) {
    this.session = session;
  }

  selectLang(lang: any) {
    this.router.navigate([`/${this.session}//session-main`, this.session, lang]);
  }

}
