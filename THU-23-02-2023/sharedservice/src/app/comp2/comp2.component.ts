import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  data=''
  constructor(private sharedService:SharedService) {
    this.sharedService.commonData$.subscribe(message => {
      if (message) {
        this.data=message;
      } else {
        this.data = '';
      }
    });
   }
  ngOnInit(): void {
  }

}
