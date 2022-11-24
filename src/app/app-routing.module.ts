import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CallbackComponent} from "./callback/callback.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./auth/guards/auth.guard";

const routes: Routes = [

   {path : 'home',             component: HomeComponent},
   {path : 'callback',         component: CallbackComponent},
   {path : 'dashboard',        component: DashboardComponent,canActivate: [AuthGuard]},
   {path : 'docs',             loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule) },
   {path : '**',               redirectTo: '/home'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
