import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PhotoFormComponent } from './photo-form.component';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class PhotoFormModule {

}