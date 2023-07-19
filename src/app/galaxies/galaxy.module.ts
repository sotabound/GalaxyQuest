import { NgModule } from '@angular/core';
import { GalaxyListComponent } from './galaxy-list.component';
import { GalaxyDetailComponent } from './galaxy-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { GalaxyDetailGuard } from './galaxy-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GalaxyListComponent,
    GalaxyDetailComponent,
    ConvertToSpacesPipe,
    ],
  imports: [
    RouterModule.forChild([
      { path:'galaxies', component: GalaxyListComponent },
      { 
        path: 'galaxies/:id', 
        canActivate: [GalaxyDetailGuard],
        component: GalaxyDetailComponent 
      },
    ]),
    SharedModule
  ]
})
export class GalaxyModule { }
