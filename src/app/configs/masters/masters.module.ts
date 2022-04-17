import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersComponent } from './masters.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedmodulesModule } from 'src/app/sharedmodules/sharedmodules.module';

const route: Routes = [
  {
    path: '',
    component: MastersComponent
  },
];


@NgModule({
  declarations: [
    MastersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedmodulesModule
  ]
})
export class MastersModule { }
