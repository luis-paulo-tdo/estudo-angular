import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoFormComponent } from './photo-form.component';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ImmediateClickModule,
        PhotoModule,
        ReactiveFormsModule,
        RouterModule,
        VMessageModule
    ]
})
export class PhotoFormModule {

}