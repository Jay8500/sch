import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShomeComponent } from './shome/shome.component';
import { SloginComponent } from './slogin/slogin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slogin',
    pathMatch: 'full',
  },
  {
    path: 'slogin',
    component: SloginComponent,
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ShomeComponent,
      },
      {
        path: 'studentinfo',
        loadChildren: () =>
          import('./academics/studentprofile/studentprofile.module').then(
            (s) => s.StudentprofileModule
          ),
      },
      {
        path: 'studentview',
        loadChildren: () =>
          import('./academics/studentview/studentview.module').then(
            (s) => s.StudentviewModule
          ),
      },
      {
        path: 'feecollection',
        loadChildren: () =>
          import('./business/sfeecllctn/sfeecllctn.module').then(
            (s) => s.SfeecllctnModule
          ),
      },
      {
        path: 'configurations-masters',
        loadChildren: () =>
          import('./configs/masters/masters.module').then(
            (s) => s.MastersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
