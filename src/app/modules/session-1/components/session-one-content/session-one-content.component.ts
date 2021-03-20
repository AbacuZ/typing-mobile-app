import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadFileService } from '@app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-session-one-content',
  templateUrl: './session-one-content.component.html',
  styleUrls: ['./session-one-content.component.scss'],
})
export class SessionOneContentComponent implements OnInit {

  path: any = this.route.snapshot.paramMap.get('path');
  subscription: Subscription;

  constructor(private readFileService: ReadFileService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initalData();
  }

  initalData() {
    this.subscription = this.readFileService.getFile(this.path).subscribe(res => {
      console.log(res);
    });
  }

}
