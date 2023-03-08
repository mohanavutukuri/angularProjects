import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sudoku';
  
  arr=Array.from(Array(9), () => {
    return new Array(9).fill('0')
  });
  board:number[][]=[
    [5,0,0,6,7,0,0,0,2],
    [0,7,2,1,9,5,0,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [0,1,3,9,0,4,8,5,0],
    [9,6,1,5,3,0,2,8,0],
    [2,0,7,0,0,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
  ];
  ngOnInit():void{
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        this.arr[i][j]=this.board[i][j];
      }
    }
  }
  solve(){
    console.log(this.solveBoard(this.arr.slice()));
  }
  solveBoard(filledBoard:any){
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        if(filledBoard[i][j]==0){
          for(let k=1;k<=9;k++){
            if(this.isValid(filledBoard,i,j,k)){
              filledBoard[i][j]=k.toString();
              if(this.solveBoard(filledBoard)==true)
              return true;
              else
              filledBoard[i][j]=0
            }
          }
          return false;
        }
      }
    }
    this.board=filledBoard;
    return true;
  }
  isValid(filledBoard:any,row:number,col:number,k:number){
    for(let i=0;i<9;i++){
      if(filledBoard[i][col]==k)
        return false;
      if(filledBoard[row][i]==k)
        return false;
      let x=(3*Math.floor(row/3)+i%3);
      let y=Math.floor(3*Math.floor(col/3)+Math.floor(i/3));
      if(filledBoard[x][y]==k)
      return false;
      
    }
    
    return true;
  }
}
