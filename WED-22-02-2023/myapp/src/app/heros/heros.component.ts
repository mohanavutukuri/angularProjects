import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService:HeroService) { }
  
  heros=this.heroService.getheros();
  ngOnInit(): void {
  }
  selectedHero={id:0,name:''};
  printhero(hero:any){
    this.selectedHero=hero;
  }
  updateFromChild(e:any){
    console.log(e.target.value);
    alert("data from child");
  }
}
