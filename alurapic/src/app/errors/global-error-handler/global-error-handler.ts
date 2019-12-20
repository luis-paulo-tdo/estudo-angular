import { ErrorHandler } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

export class GlobalErrorHandler implements ErrorHandler {

    handleError(error: any): void {

        console.log('Erro Global');

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stack = stackFrames.map(stackFrame => stackFrame.toString()).join('\n');
                console.log('Error: ', error);
                console.log('Stack: ', stack);
            });
    }
}
