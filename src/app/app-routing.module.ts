import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [{
  path:'',redirectTo:'home',pathMatch:'full'
},
{
  path:'home',component:HomeComponent
},
{
  path:'subscribe', component:SubscribeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
