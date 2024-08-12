import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HistoryComponent } from './history/history.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';

const routes: Routes = [{
  path:'',redirectTo:'home',pathMatch:'full'
},
{
  path:'home',component:HomeComponent
},
{
  path:'subscribe', component:SubscribeComponent
},
{ path:'history', component:HistoryComponent},
{ path:'downloads',component:DownloadsComponent},
{ path: 'watchlater',component:WatchLaterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
