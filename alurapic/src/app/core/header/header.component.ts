import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user: User;
    user$: Observable<User>;

    constructor(private userService: UserService) { 
        this.user$ = userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }
}
