import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Student } from '../Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentslist:Student[]=[];
  student={id:0,name:'',gender:'',class:0,rank:0};
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.studentslist=this.service.getStudentData();
  }

  editRank(student:any){
    this.student=Object.assign({},student);
  }

  ascendingList(){
    this.studentslist=this.service.sortAscending();
  }

  DescendingList(){
    this.studentslist=this.service.sortDescending();
  }
}
