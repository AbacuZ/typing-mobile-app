import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { session, switchLanguage } from 'src/utils';

@Component({
  selector: 'app-session-one-main',
  templateUrl: './session-one-main.component.html',
  styleUrls: ['./session-one-main.component.scss'],
})
export class SessionOneMainComponent implements OnInit {

  lang: any = this.route.snapshot.paramMap.get('lang');
  name: any = this.route.snapshot.paramMap.get('name')
  data: any[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.initalData();
  }

  initalData() {
    const data = session.find(res => res.name === this.name).description.find(res => res.lang === this.lang);
    this.data = [];
    this.data.push(data);
  }

  onClickSession(filename: any) {
    this.router.navigate([`/${this.name}//session-content`, filename]);
  }

  changeLanguage() {
    const lang = switchLanguage(this.lang);
    this.router.navigate([`/${this.name}//session-main`, this.name, lang]);
  }

}
