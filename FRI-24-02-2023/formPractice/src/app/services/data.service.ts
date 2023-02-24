import { Injectable } from '@angular/core';
import { User } from '../models/sampleData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getUserData(){
    return {
      firstName:"mohan",
      lastName:"vutukuri",
      age:22,
      address:"cpt",
      userType:"student"
    }
  }
  logData(data:any){
    console.log(data);
  }
}
