import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { testData, mainData } from '../models/data';
@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  API="https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  constructor(private http:HttpClient) { }
  getData():Observable<mainData[]>{
    return this.http.get<testData>(this.API).pipe(
      map((x:testData) =>{
        return x.data;
      })
    )
  }
}
