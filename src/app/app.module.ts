import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MaterializeModule} from 'angular2-materialize';
import { HeaderComponent } from './header/header.component';
import { DurationStatComponent } from './records/stats/duration-stat/duration-stat.component';
import { RecordListComponent } from './records/record-list/record-list.component';
import { RecordFormComponent } from './records/record-form/record-form.component';
import { RecordItemComponent } from './records/record-list/record-item/record-item.component';
import {AppRoutingModule} from './app-routing.module';
import { RecordsComponent } from './records/records.component';
import {RecordService} from './records/record.service';
import {FormsModule} from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {ChartsModule} from 'ng2-charts';
import { AverageDurationComponent } from './records/stats/averageDuration-stat/average-duration.component';
import { NumberRecordStatComponent } from './records/stats/numberRecord-stat/number-record-stat.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {AuthService} from './authentication/auth.service';
import {AuthGuard} from './auth-guard.service';
import {ToastService} from './toast.service';
import { StatsComponent } from './records/stats/stats.component';
import { LoadingComponent } from './loading/loading.component';
import {LoadingService} from './loading/loading.service';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DurationStatComponent,
    RecordListComponent,
    RecordFormComponent,
    RecordItemComponent,
    RecordsComponent,
    AverageDurationComponent,
    NumberRecordStatComponent,
    AuthenticationComponent,
    StatsComponent,
    LoadingComponent,
    CreateAccountComponent,
    AuthenticationPageComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ChartsModule
  ],
  providers: [
    RecordService,
    AuthService,
    AuthGuard,
    ToastService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
