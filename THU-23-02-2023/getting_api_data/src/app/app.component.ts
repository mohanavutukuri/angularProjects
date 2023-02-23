import { Component } from '@angular/core';
import { mainData } from './models/data';
import { GetServiceService } from './service/get-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'getting_api_data';
  dataArray:mainData[]=[];
  constructor(private service:GetServiceService){

  }
  ngOnInit():void{
    this.service.getData().subscribe((data:mainData[])=>{
      this.dataArray = data;
      console.log(data);
      
    })
  }
}
