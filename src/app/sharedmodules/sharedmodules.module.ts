import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//primeng compoments.
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    InputTextModule,
    TableModule,
    AutoCompleteModule,
    PanelModule,
    TabViewModule,
    TooltipModule,
    SkeletonModule,
    ProgressSpinnerModule,
    BlockUIModule,
    AvatarModule,
    AvatarGroupModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ImageModule,
    CardModule,
    AccordionModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ],
})
export class SharedmodulesModule {}
