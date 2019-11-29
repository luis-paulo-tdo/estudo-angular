import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
    templateUrl: 'photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

    photoId: number;
    photo$: Observable<Photo>;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService,
        private photoService: PhotoService,
        private router: Router
    ) { }
    
    ngOnInit(): void {
        this.photoId = this.activatedRoute.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(this.photoId);
    }

    remove() {
        this.photoService
            .removePhoto(this.photoId)
            .subscribe(
                () => {
                    this.alertService.success('Photo removed');
                    this.router.navigate(['']);
                },
                error => {
                    this.alertService.warning('Photo could not be removed');
                }
            );
    }
}
