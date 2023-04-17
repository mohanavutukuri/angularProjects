import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '606328508218-m30psbpmr9a37m50agvddd1ddnqeh3sd.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
