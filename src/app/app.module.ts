import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { UserService } from './users/user.service'
import { LoginService } from './login/login.service'
import { AuthService } from './auth/auth.service'
import { GuardGuard } from './guard/guard.guard'
import { AgmCoreModule } from '@agm/core'
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfService } from './conf/conf.service';
import { InstaComponent } from './insta/insta.component';
import { InstaService } from './insta/insta.service';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    InstaComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiNR2jlSw14QuwXiKyaam_tUuvDZttAvk'
    })
  ],
  providers: [
    UserService,
    GuardGuard,
    LoginService,
    AuthService,
    ConfService,
    InstaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
