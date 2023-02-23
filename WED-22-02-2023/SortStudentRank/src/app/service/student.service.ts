import { Injectable } from '@angular/core';
import { Student } from '../components/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList:Student[]=[];
  constructor() { }

  getStudentData(){
    this.studentList=[
      {id:84,name:"mohan",gender:'M',class:10,rank:1},
      {id:70,name:"snehi",gender:'F',class:9,rank:2},
      {id:51,name:"pranav",gender:'M',class:10,rank:5},
      {id:90,name:"intiyaz",gender:'M',class:10,rank:4},
      {id:65,name:"nikhil",gender:'M',class:9,rank:3},
      {id:78,name:"nikita",gender:'F',class:9,rank:6}
    ]
    return this.sortAscending();
  }
  updateRank(student:any){
    
    let newInd=student.rank-1;
    let oldInd=0;
    let old=0;
    for(let i=0;i<this.studentList.length;i++){
      if(student.id==this.studentList[i].id){
        oldInd=i;
      }
    }
    old=oldInd;
    let adder=0;
    if(newInd<oldInd){
      adder=1;
    }else{
      adder=-1;
      oldInd=newInd
      newInd=old
    }
    for(let i=newInd;i<oldInd;i++){
      this.studentList[i].rank+=adder;
    }
    this.studentList[old]=student;
    if(adder==-1){
      this.studentList[oldInd].rank+=adder;
    }
    this.sortAscending();
  }
  sortAscending(){
    this.studentList.sort((a, b) => {
      return a.rank - b.rank;
    });
    return this.studentList;
  }
  sortDescending(){
    this.studentList.sort((a, b) => {
      return  b.rank - a.rank;
    });
    return this.studentList;
  }
}
