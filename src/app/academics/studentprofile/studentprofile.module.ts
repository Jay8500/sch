import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentprofileComponent } from './studentprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedmodulesModule } from 'src/app/sharedmodules/sharedmodules.module';

const route: Routes = [
  {
    path: '',
    component: StudentprofileComponent,
  },
];


@NgModule({
  declarations: [
    StudentprofileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedmodulesModule
  ]
})
export class StudentprofileModule { }
