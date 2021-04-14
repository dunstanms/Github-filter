import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReposearchComponent } from './components/reposearch/reposearch.component';
import { UsersearchComponent } from './components/usersearch/usersearch.component';
import { ClickedRepoDirective } from './Directives/clicked-repo.directive';
import { DaycreatedPipe } from './pipes/daycreated.pipe';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    ReposearchComponent,
    UsersearchComponent,
    ClickedRepoDirective,
    DaycreatedPipe,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }