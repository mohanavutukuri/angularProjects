import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private commonData=new Subject<any>();
  commonData$=this.commonData.asObservable();
  
  constructor() { }

  setData(value:any){
    this.commonData.next(value);
  }
  

}
