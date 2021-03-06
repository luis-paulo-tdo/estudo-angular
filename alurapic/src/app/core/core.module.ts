import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlertModule } from '../shared/components/alert/alert.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { MenuModule } from '../shared/components/menu/menu.module';
import { RequestInterceptor } from './auth/request-interceptor';
import { ShowIfLoggedModule } from '../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        AlertModule,
        CommonModule,
        LoadingModule,
        MenuModule,
        RouterModule,
        ShowIfLoggedModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }
