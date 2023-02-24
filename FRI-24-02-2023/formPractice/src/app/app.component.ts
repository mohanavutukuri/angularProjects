import { Component } from '@angular/core';
import { User } from './models/sampleData';
import { DataService } from './services/data.service';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private service: DataService,private fb:FormBuilder) {}

  title = 'formPractice';
  user:any;
  userForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    address:['',Validators.required],
    userType:['',Validators.required],
    age:[Validators.required]
  });

  ngOnInit():void{
    this.user=this.service.getUserData();
    this.userForm.setValue({
      firstName:this.user.firstName,
      lastName:this.user.lastName,
      age:this.user.age,
      address:this.user.address,
      userType:this.user.userType
    })
  }

  sendReactiveForms() {

    console.log(this.userForm.getRawValue());
  }

}
