import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
