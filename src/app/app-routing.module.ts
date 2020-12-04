import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './views/home/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './views/home/register/register.module#RegisterPageModule' },
  {
    path: 'account',
    canActivate: [AuthGuardService],
    loadChildren: './views/account/app-routing-account.module#AppRoutingAccountModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
