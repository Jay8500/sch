import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfeecllctnComponent } from './sfeecllctn.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedmodulesModule } from 'src/app/sharedmodules/sharedmodules.module';

const route: Routes = [
  {
    path: '',
    component: SfeecllctnComponent,
  },
];

@NgModule({
  declarations: [SfeecllctnComponent],
  imports: [CommonModule, RouterModule.forChild(route),SharedmodulesModule],
})
export class SfeecllctnModule {}
