import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:UserService) { }
  userRegForm=this.fb.group(
    {
      name:['',Validators.required],
      email:['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['',[Validators.minLength(8) , Validators.required]],
      gender:['',Validators.required],
      married:[false,Validators.required],
      profession:['',Validators.required],
      income:[0,[Validators.min(20000) ,Validators.max(80000) , Validators.required]]
    }
  )
  ngOnInit(): void {
  }
  submit(){
    this.service.saveUser(this.userRegForm.getRawValue()).subscribe(data=>{
      console.log(data);
      alert("data saved");
    },error=>{
      console.log("server validation failed");
    })
  }
}
