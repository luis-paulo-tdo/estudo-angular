import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule  } from '@angular/core';

import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule],
  providers:[
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }
