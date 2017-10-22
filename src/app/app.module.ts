import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { RecordComponent } from './record/record.component';
import { DiscoverComponent } from './discover/discover.component';
import { DataComponent } from './data/data.component';
import { HeaderComponent } from './header/header.component';
import { AccountComponent } from './account/account.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    RecordComponent,
    DiscoverComponent,
    DataComponent,
    HeaderComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
