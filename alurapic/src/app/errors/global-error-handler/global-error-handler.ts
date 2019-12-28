import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import * as StackTrace from 'stacktrace-js';

import { environment } from 'src/environments/environment';
import { ServerLogService } from './server-log.service';
import { UserService } from 'src/app/core/user/user.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: any): void {

        console.log('========== Erro Global ==========');

        const location = this.injector.get(LocationStrategy);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);
        const userService = this.injector.get(UserService);

        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const message = error.message ? error.message : error.toString();

        if (environment.production) router.navigate(['/error']);

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stack = stackFrames.map(stackFrame => stackFrame.toString()).join('\n');
                serverLogService
                    .log({ message, stack, url, user: userService.getUserName() })
                    .subscribe(
                        () => {
                            console.log('Error logged on server');
                        },
                        error => {
                            console.log(error);
                            console.log('Fail to send error log to server');
                        }
                    );
            });
    }
}
