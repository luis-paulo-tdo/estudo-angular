import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case-validator';
import { UserNotTakenValidatorService } from './user-not-taken.service';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {
    
    signUpForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorsService: UserNotTakenValidatorService) { }

    ngOnInit(): void {
        this.signUpForm = this.formBuilder.group({
            email: [
                '', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: [
                '', 
                [
                    Validators.required, 
                    Validators.minLength(2),
                    Validators.maxLength(40),
                ]
            ],
            userName: [
                '', 
                [
                    Validators.required, 
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30),
                ],
                this.userNotTakenValidatorsService.checkUserNameTaken()
            ],
            password: [
                '', 
                [
                    Validators.required, 
                    Validators.minLength(8),
                    Validators.maxLength(14),
                ]
            ],
        });
    }
}
