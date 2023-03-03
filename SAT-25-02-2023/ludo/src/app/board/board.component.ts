import { Component, OnInit } from '@angular/core';
import { XY } from './point';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  title="ludo app is running!"
  turn:number=0;
  enableBtn=false;
  selected:string='';
  randN:number=0;
  constructor() { }

  bluePath=["1,2","1,3","1,4","1,5","1,6","1,7","1,8","1,9","1,10",
  "1,11","1,12","1,13","1,14","1,15","1,16","1,17","1,18","1,19","1,20",
  "1,21","1,22","1,23","1,24","1,25","1,26","1,27","1,28","1,29","1,30",
  "1,31","1,32","1,33","1,34","1,35","1,36","1,37","1,38","1,39","1,40",
  "1,41","1,42","1,43","1,44","1,45","1,46","1,47","1,48","1,49",
  "1,50","1,51","1,52","1,53","1,54","1,55","1,56","1,57"];
  yellowPath=["1,41","1,42","1,43","1,44","1,45","1,46","1,47","1,48","1,49",
  "1,50","1,51","1,52","1,1","1,2","1,3","1,4","1,5","1,6","1,7","1,8","1,9","1,10",
  "1,11","1,12","1,13","1,14","1,15","1,16","1,17","1,18","1,19","1,20",
  "1,21","1,22","1,23","1,24","1,25","1,26","1,27","1,28","1,29","1,30",
  "1,31","1,32","1,33","1,34","1,35","1,36","1,37","1,38","1,39","4,40","4,41","4,42","4,43","4,44"];
  redPath=["1,15","1,16","1,17","1,18","1,19","1,20","1,21","1,22","1,23","1,24","1,25",
  "1,26","1,27","1,28","1,29","1,30","1,31","1,32","1,33","1,34","1,35",
  "1,36","1,37","1,36","1,39","1,40","1,41","1,42","1,43","1,44","1,45",
  "1,46","1,47","1,48","1,49","1,50","1,51","1,52","1,1","1,2","1,3","1,4",
  "1,5","1,6","1,7","1,8","1,9","1,10","1,11","1,12","1,13","2,14","2,15","2,16","2,17","2,18"];
  greenPath=["1,28","1,29","1,30","1,31","1,32","1,33","1,34","1,35","1,36","1,37","1,38",
  "1,39","1,40","1,41","1,42","1,43","1,44","1,45","1,46","1,47","1,48",
  "1,49","1,50","1,51","1,52","1,1","1,2","1,3","1,4","1,5","1,6","1,7","1,8","1,9","1,10",
  "1,11","1,12","1,13","1,14","1,15","1,16","1,17","1,18","1,19","1,20",
  "1,21","1,22","1,23","1,24","1,25","1,26","3,27","3,28","3,29","3,30","3,31"];
  bluepathPosition:XY[]=[]
  redpathPosition:XY[]=[]
  greenpathPosition:XY[]=[]
  yellowpathPosition:XY[]=[]
  pins=[
    {pinid:"blpin1",movepinid:"moveblpin1",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"blpin2",movepinid:"moveblpin2",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"blpin3",movepinid:"moveblpin3",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"blpin4",movepinid:"moveblpin4",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"rdpin1",movepinid:"moverdpin1",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"rdpin2",movepinid:"moverdpin2",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"rdpin3",movepinid:"moverdpin3",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"rdpin4",movepinid:"moverdpin4",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"grpin1",movepinid:"movegrpin1",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"grpin2",movepinid:"movegrpin2",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"grpin3",movepinid:"movegrpin3",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"grpin4",movepinid:"movegrpin4",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"ylpin1",movepinid:"moveylpin1",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"ylpin2",movepinid:"moveylpin2",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"ylpin3",movepinid:"moveylpin3",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"ylpin4",movepinid:"moveylpin4",currplaceind:-1,out:false,top:0,left:0,safe:true}
  ]

  ngOnInit(): void {
    // this.setPins();
  }
  ngAfterContentInit(){
    setTimeout(()=>this.setPins(),1000);
  }
  setPins(){
    this.bluePath.forEach(eachPath=>{
      let element=document.getElementById(eachPath);
      let offSet=element!.getBoundingClientRect();
      this.bluepathPosition.push({top:offSet.top,left:offSet.left})
    })
    this.redPath.forEach(eachPath=>{
      let element=document.getElementById(eachPath);
      let offSet=element!.getBoundingClientRect();
      this.redpathPosition.push({top:offSet.top,left:offSet.left})
    })
    this.greenPath.forEach(eachPath=>{
      let element=document.getElementById(eachPath);
      let offSet=element!.getBoundingClientRect();
      this.greenpathPosition.push({top:offSet.top,left:offSet.left})
    })
    this.yellowPath.forEach(eachPath=>{
      let element=document.getElementById(eachPath);
      let offSet=element!.getBoundingClientRect();
      this.yellowpathPosition.push({top:offSet.top,left:offSet.left})
    })
    this.pins.forEach(each=>{
      let element=document.getElementById(each.pinid);
      let offSet=element!.getBoundingClientRect();
      each.top=offSet.top
      each.left=offSet.left
      document.getElementById(each.movepinid)!.style.top=offSet.top+8+"px";
      document.getElementById(each.movepinid)!.style.left=offSet.left+5+"px"
    })
  }
  getColor(val:number){
    switch(val){
      case 0:
        return "bl"
      case 1:
        return "rd"
      case 2:
        return "gr"
      case 3:
        return "yl"
    }
    return "";
  }
  selectedKey(id:string){
    console.log("selected pin id =",id);
    this.selected=id;
    let classlist=document.getElementById(id)!.classList;
    if(this.randN>0 && classlist.contains('scale')){
      this.pins.forEach(data=>{
        document.getElementById(data.movepinid)!.classList.remove('scale');
        if(this.selected===data.movepinid){
          data.out=true;
          if(data.currplaceind==-1)
          data.currplaceind=0;
          else if((data.currplaceind+this.randN)<this.bluepathPosition.length)
          data.currplaceind+=this.randN;
          if(this.selected.includes("bl")){
            document.getElementById(this.selected)!.style.top=this.bluepathPosition[data.currplaceind].top+"px";
            document.getElementById(this.selected)!.style.left=this.bluepathPosition[data.currplaceind].left+5+"px";
          }
          else if(this.selected.includes("rd")){
            document.getElementById(this.selected)!.style.top=this.redpathPosition[data.currplaceind].top+8+"px";
            document.getElementById(this.selected)!.style.left=this.redpathPosition[data.currplaceind].left+5+"px";
          }
          else if(this.selected.includes("gr")){
            document.getElementById(this.selected)!.style.top=this.greenpathPosition[data.currplaceind].top+8+"px";
            document.getElementById(this.selected)!.style.left=this.greenpathPosition[data.currplaceind].left+5+"px";
          }
          else if(this.selected.includes("yl")){
            document.getElementById(this.selected)!.style.top=this.yellowpathPosition[data.currplaceind].top+8+"px";
            document.getElementById(this.selected)!.style.left=this.yellowpathPosition[data.currplaceind].left+5+"px";
          }
        }
      })
      this.enableBtn=false;
      this.randN=0;
    }else{
      alert("select a valid pin")
    }

  }

  rollDice() {
    const dice = document.getElementById('dice');
    
    let randNum = (Math.floor(10 * Math.random()) % 6) + 1;
    this.randN=randNum;
    // console.log("player = ",this.turn+1,"randNo = ",randNum);

    dice!.style.animation = 'rolling 3s';

    setTimeout(() => {

        switch (randNum) {
            case 1:
                dice!.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice!.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice!.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice!.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice!.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice!.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        dice!.style.animation = 'none';

    }, 3010);


    if(randNum!=6){
      this.pins.forEach(data=>{
        if(data.out &&data.pinid.includes(this.getColor(this.turn))){
          if(data.currplaceind+randNum<=(this.bluepathPosition.length)){
            console.log("curr in = ",data.currplaceind," new ind will be = ",data.currplaceind+randNum,"list length = ",this.bluePath.length);
            document.getElementById(data.movepinid)!.classList.add('scale');
            this.enableBtn=true;
          }
        }
      })
      this.turn=(++this.turn)%4;
    }else{
      console.log("in else");

      this.pins.forEach(data=>{
        if(data.pinid.includes(this.getColor(this.turn))){
          this.enableBtn=true;
          if(data.currplaceind+randNum<=(this.bluepathPosition.length)){
            console.log("curr in = ",data.currplaceind," new ind will be = ",data.currplaceind+randNum,"list length = ",this.bluePath.length);
            document.getElementById(data.movepinid)!.classList.add('scale');
          }

        }
      })
    }
  }

}
