import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalaxyListComponent } from './galaxies/galaxy-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { GalaxyDetailComponent } from './galaxies/galaxy-detail.component';
import { RouterModule } from '@angular/router';
import { GalaxyDetailGuard } from './galaxies/galaxy-detail.guard';

@NgModule({
  // declarations are internal modules and components
  declarations: [
    AppComponent,
    GalaxyListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    GalaxyDetailComponent
  ],
  // Imports are external modules  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'galaxies', component: GalaxyListComponent },
      { 
        path: 'galaxies/:id', 
        canActivate: [GalaxyDetailGuard],
        component: GalaxyDetailComponent 
      },
      { path:'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '*', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
