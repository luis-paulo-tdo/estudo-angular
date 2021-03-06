import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [
        PhotoCommentsComponent,
        PhotoDetailsComponent,
        PhotoOwnerOnlyDirective
    ],
    exports: [
        PhotoCommentsComponent,
        PhotoDetailsComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        ReactiveFormsModule,
        RouterModule,
        ShowIfLoggedModule,
        VMessageModule
    ]
})
export class PhotoDetailsModule {

}
