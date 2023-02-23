import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() inputHero:any;
  @Output() newHero=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  updateHero() {
    this.newHero.emit({id:this.inputHero.id,name:"mohan"})
  }
}
