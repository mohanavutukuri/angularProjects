import { Component } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { SocialUser } from '@abacritt/angularx-social-login/public-api';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private authService: SocialAuthService,private service:UserService) { }

  ngOnInit():void{
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      localStorage.setItem("token",user.idToken)
      this.loggedIn = (user != null);
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  useGreet(){
    this.service.greetUser().subscribe(data=>{
      alert(data.name);
    },(error)=>{
      console.log(error);
    })
  }
}
