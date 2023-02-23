import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  @Input() student:any;
  @Output() changeTrigger=new EventEmitter();
  constructor(private service:StudentService) { }

  ngOnInit(): void {
  }

  submitUpdate(student:any){
    this.service.updateRank(student);
  }
}
