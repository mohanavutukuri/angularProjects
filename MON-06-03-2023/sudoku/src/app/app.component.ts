import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sudoku';
  board:number[][]=[];
  ngOnInit():void{
    for(let i=0;i<9;i++){
      let arr=[]
      for(let j=0;j<9;j++){
        arr.push(0)
      }
      this.board.push(arr);
    }
  }
  solve(){

  }
  solveBoard(filledBoard:number[][]){
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        if(this.board[i][j]==0){
          
        }
      }
    }
  }
}
