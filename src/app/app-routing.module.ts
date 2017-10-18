import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {RecordComponent} from './record/record.component';
import {DiscoverComponent} from './discover/discover.component';
import {DataComponent} from './data/data.component';
import {AccountComponent} from './account/account.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full' },
  {path: 'news', component: NewsComponent },
  {path: 'record', component: RecordComponent },
  {path: 'discover', component: DiscoverComponent },
  {path: 'data', component: DataComponent },
  {path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
