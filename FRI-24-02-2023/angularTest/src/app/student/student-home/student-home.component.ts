import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  studentForm=this.fb.group({
    name:['',Validators.required],
    course:['',Validators.required],
    gender:['',Validators.required],
    phone:['',Validators.required],
    email:['',Validators.email]
  })
  ngOnInit(): void {
  }
  printData(){
    console.log(this.studentForm.getRawValue());
  }
}
