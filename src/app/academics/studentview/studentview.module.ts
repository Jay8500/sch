import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentviewComponent } from './studentview.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedmodulesModule } from 'src/app/sharedmodules/sharedmodules.module';

const route: Routes = [
  {
    path: '',
    component: StudentviewComponent,
  },
];



@NgModule({
  declarations: [
    StudentviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedmodulesModule
  ]
})
export class StudentviewModule { }
