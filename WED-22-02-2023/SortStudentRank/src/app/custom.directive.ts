import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  @Input() rank:number=0;
  constructor(private el:ElementRef) {
   }
   ngOnInit():void{
    if(this.rank%2==0)
    this.el.nativeElement.style.backgroundColor='red'
    else
    this.el.nativeElement.style.backgroundColor='blue'
   }
}
