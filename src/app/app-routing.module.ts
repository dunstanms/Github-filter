import { Page404Component } from './components/page404/page404.component';
import { UsersearchComponent } from './components/usersearch/usersearch.component';
import { ReposearchComponent } from './components/reposearch/reposearch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: '',redirectTo: 'users', pathMatch:'full'},
  {path: 'repositories', component: ReposearchComponent},
  {path: 'users', component:UsersearchComponent },
  {path: '**', component: Page404Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }