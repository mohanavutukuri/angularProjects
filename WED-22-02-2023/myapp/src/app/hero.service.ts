import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getheros(){
    return [
      {id:1,name:"abc1"},
      {id:2,name:"abc2"},
      {id:3,name:"abc3"}
    ]
  }
}
