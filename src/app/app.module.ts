import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { GalaxyModule } from './galaxies/galaxy.module';



@NgModule({
  // declarations are internal modules and components
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  // Imports are external modules  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      { path:'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '*', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    GalaxyModule,
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
