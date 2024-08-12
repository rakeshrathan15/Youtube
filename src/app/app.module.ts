import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';

import { SubscribeComponent } from './subscribe/subscribe.component';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    SubscribeComponent,
          HistoryComponent,
          DownloadsComponent,
          WatchLaterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
