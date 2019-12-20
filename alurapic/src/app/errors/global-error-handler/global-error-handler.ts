import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as StackTrace from 'stacktrace-js';
import { UserService } from 'src/app/core/user/user.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: any): void {

        console.log('========== Erro Global ==========');

        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);

        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const message = error.message ? error.message : error.toString();

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stack = stackFrames.map(stackFrame => stackFrame.toString()).join('\n');
                console.log({message, stack, url, user: userService.getUserName()});
            });
    }
}
