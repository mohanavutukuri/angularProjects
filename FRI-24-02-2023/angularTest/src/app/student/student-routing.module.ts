import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualStudentComponent } from './individual-student/individual-student.component';
import { StudentHomeComponent } from './student-home/student-home.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:StudentHomeComponent
  },
  {
    path:'individual',
    component:IndividualStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
