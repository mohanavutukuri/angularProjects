import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private sharedService:SharedService) { }
  i=0;
  ngOnInit(): void {
    
  }
  sendData(){
    this.i++;
    this.sharedService.setData("hello mohan"+this.i);
  }
}
