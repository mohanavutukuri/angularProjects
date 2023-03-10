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
  changeTurn:Boolean=true;
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
    {pinid:"blpin1",player:0,movepinid:"moveblpin1",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"blpin2",player:0,movepinid:"moveblpin2",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"blpin3",player:0,movepinid:"moveblpin3",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"blpin4",player:0,movepinid:"moveblpin4",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"rdpin1",player:1,movepinid:"moverdpin1",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"rdpin2",player:1,movepinid:"moverdpin2",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"rdpin3",player:1,movepinid:"moverdpin3",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"rdpin4",player:1,movepinid:"moverdpin4",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"grpin1",player:2,movepinid:"movegrpin1",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"grpin2",player:2,movepinid:"movegrpin2",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"grpin3",player:2,movepinid:"movegrpin3",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"grpin4",player:2,movepinid:"movegrpin4",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"ylpin1",player:3,movepinid:"moveylpin1",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"ylpin2",player:3,movepinid:"moveylpin2",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"ylpin3",player:3,movepinid:"moveylpin3",currplaceind:-1,out:false,top:0,left:0,safe:true},
    {pinid:"ylpin4",player:3,movepinid:"moveylpin4",currplaceind:-1,out:false,top:0,left:0,safe:true}
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
      document.getElementById(each.movepinid)!.style.top=offSet.top+10+"px";
      document.getElementById(each.movepinid)!.style.left=offSet.left+9.5+"px"
    })
  }
  // setUserColor(){

  // }
  getColor(val:number){
    switch(val){
      case 0:
        document.getElementById("inner")!.style.animation="blue-pulse linear 1s infinite";
        return "bl"
      case 1:
        document.getElementById("inner")!.style.animation="red-pulse linear 1s infinite";
        return "rd"
      case 2:
        document.getElementById("inner")!.style.animation="green-pulse linear 1s infinite";
        return "gr"
      case 3:
        document.getElementById("inner")!.style.animation="yellow-pulse linear 1s infinite";
        return "yl"
    }
    return "";
  }
  setSafe(selectedPin:any){
    let safePoints=["1,2","1,10","1,15","1,23","1,28","1,36","1,41","1,49"];
    if(this.selected.includes("bl")){
      if(safePoints.includes(this.bluePath[selectedPin.currplaceind])){
        selectedPin.safe=true;
        // console.log(selectedPin.movepinid," is set to safe");
      }else{
        selectedPin.safe=false;
        // console.log(selectedPin.movepinid," is set to unsafe");
      }
    }
    else if(this.selected.includes("rd")){
      if(safePoints.includes(this.redPath[selectedPin.currplaceind])){
        selectedPin.safe=true;
        // console.log(selectedPin.movepinid," is set to safe");
      }else{
        selectedPin.safe=false;
        // console.log(selectedPin.movepinid," is set to unsafe");
      }
    }
    else if(this.selected.includes("gr")){
      if(safePoints.includes(this.greenPath[selectedPin.currplaceind])){
        selectedPin.safe=true;
        // console.log(selectedPin.movepinid," is set to safe");
      }else{
        selectedPin.safe=false;
        // console.log(selectedPin.movepinid," is set to unsafe");
      }
    }
    else if(this.selected.includes("yl")){
      if(safePoints.includes(this.yellowPath[selectedPin.currplaceind])){
        selectedPin.safe=true;
        // console.log(selectedPin.movepinid," is set to safe");
      }else{
        selectedPin.safe=false;
        // console.log(selectedPin.movepinid," is set to unsafe");
      }
    }
  }
  selectedKey(id:string){
    this.selected=id;
    let classlist=document.getElementById(id)!.classList;
    if(this.randN==0){
      alert("please roll the dice");
      return;
    }
    if(this.randN>0 && classlist.contains('scale')){
      this.pins.forEach(data=>{
        document.getElementById(data.movepinid)!.classList.remove('scale');
        if(this.selected===data.movepinid){
          data.out=true;
          if(data.currplaceind==-1)
          data.currplaceind=0;
          else if((data.currplaceind+this.randN)<this.bluepathPosition.length){
            data.currplaceind+=this.randN;
            this.setSafe(data);
            this.checkPlace(data);
          }
          if(this.selected.includes("bl")){
            document.getElementById(this.selected)!.style.top=this.bluepathPosition[data.currplaceind].top+1+"px";
            document.getElementById(this.selected)!.style.left=this.bluepathPosition[data.currplaceind].left+1.5+"px";
          }
          else if(this.selected.includes("rd")){
            document.getElementById(this.selected)!.style.top=this.redpathPosition[data.currplaceind].top+1+"px";
            document.getElementById(this.selected)!.style.left=this.redpathPosition[data.currplaceind].left+1.5+"px";
          }
          else if(this.selected.includes("gr")){
            document.getElementById(this.selected)!.style.top=this.greenpathPosition[data.currplaceind].top+1+"px";
            document.getElementById(this.selected)!.style.left=this.greenpathPosition[data.currplaceind].left+1.5+"px";
          }
          else if(this.selected.includes("yl")){
            document.getElementById(this.selected)!.style.top=this.yellowpathPosition[data.currplaceind].top+1+"px";
            document.getElementById(this.selected)!.style.left=this.yellowpathPosition[data.currplaceind].left+1.5+"px";
          }
        }
      })
      this.enableBtn=false;
      this.randN=0;
    }else{
      alert("select a valid pin")
    }
    if(this.changeTurn){
      this.turn=(++this.turn)%4;
      this.getColor(this.turn);
    }
    this.changeTurn=true;
  }
  getDivId(pinInfo:any){
    switch(pinInfo.player){
      case 0:
        return this.bluePath[pinInfo.currplaceind];
      case 1:
        return this.redPath[pinInfo.currplaceind];
      case 2:
        return this.greenPath[pinInfo.currplaceind];
      case 3:
        return this.yellowPath[pinInfo.currplaceind];
    }
    return ;
  }
  checkPlace(pinInfo:any){
    var currdivId=this.getDivId(pinInfo);
    
    this.pins.forEach(data=>{
      if(pinInfo.player!=data.player && this.getDivId(data)==(currdivId) && !pinInfo.safe){
        data.currplaceind=-1;
        data.out=false;
        document.getElementById(data.movepinid)!.style.top=data.top+10+"px";
        document.getElementById(data.movepinid)!.style.left=data.left+9.5+"px";
      }
    })
  }
  rollDice() {
    if(this.enableBtn){
      alert("please move the pin");
      return;
    }
    
    let randNum = (Math.floor(10 * Math.random()) % 6) + 1;
    this.randN=randNum;
    // console.log("player = ",this.turn+1,"randNo = ",randNum);
    let c=0;
    if(randNum!=6){
      this.pins.forEach(data=>{
        if(data.out &&data.pinid.includes(this.getColor(this.turn))){
          if(data.currplaceind+randNum<=(this.bluepathPosition.length)){
            // console.log("curr in = ",data.currplaceind," new ind will be = ",data.currplaceind+randNum,"list length = ",this.bluePath.length);
            document.getElementById(data.movepinid)!.classList.add('scale');
            c++;
            this.enableBtn=true;
          }
        }
      })
    }else{
      this.pins.forEach(data=>{
        if(data.pinid.includes(this.getColor(this.turn))){
          this.enableBtn=true;
          if(data.currplaceind+randNum<=(this.bluepathPosition.length)){
            // console.log("curr in = ",data.currplaceind," new ind will be = ",data.currplaceind+randNum,"list length = ",this.bluePath.length);
            document.getElementById(data.movepinid)!.classList.add('scale');
            c++;
            this.changeTurn=false;
          }
        }
      })
    }
    if(this.changeTurn && c==0){
      this.turn=(++this.turn)%4;
      this.getColor(this.turn);
    }
    if(c==0){
      this.randN=0;
    }
    if(c==1){
      this.pins.forEach(data=>{
        if(document.getElementById(data.movepinid)!.classList.contains('scale')){
          this.selectedKey(data.movepinid);
        }
      });
    }
    console.log("c = ",c);
    
  }

}
