import { LoginComponent } from './login/login.component'
import { UsersComponent } from './users/users.component'
import { HomeComponent } from './home/home.component'
import { ErrorComponent } from './error/error.component'
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard/guard.guard'

const appRoutes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent, canActivate: [GuardGuard] },
    { path: 'home', component: HomeComponent },
    { path: '**', component: ErrorComponent }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });