import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DurationStatComponent} from './records/stats/duration-stat/duration-stat.component';
import {RecordsComponent} from './records/records.component';
import {AverageDurationComponent} from './records/stats/averageDuration-stat/average-duration.component';
import {NumberRecordStatComponent} from './records/stats/numberRecord-stat/number-record-stat.component';
import {AuthGuard} from './auth-guard.service';
import {StatsComponent} from './records/stats/stats.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'records', pathMatch: 'full'},
  {path: 'authentication', component: AuthenticationComponent},
  {path: 'records', component: RecordsComponent, canActivate: [AuthGuard]},
  {
    path: 'stats', component: StatsComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
    {path: '', redirectTo: 'duration-stat', pathMatch: 'full'},
    {path: 'duration-stat', component: DurationStatComponent},
    {path: 'average-duration-stat', component: AverageDurationComponent},
    {path: 'number-record-stat', component: NumberRecordStatComponent}
  ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
