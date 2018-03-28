import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { UserService } from './users/user.service'
import { LoginService } from './login/login.service'
import { AuthService } from './auth/auth.service'
import { GuardGuard } from './guard/guard.guard'
import { AgmCoreModule } from '@agm/core'


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


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiNR2jlSw14QuwXiKyaam_tUuvDZttAvk'
    })
  ],
  providers: [
    UserService,
    GuardGuard,
    LoginService,
    AuthService,
    ConfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
