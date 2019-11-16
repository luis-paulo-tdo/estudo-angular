import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { Observable } from 'rxjs';

@Component({
    templateUrl: 'photo-details.component.html',
    styleUrls: ['photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private photoService: PhotoService
    ) { }
    
    ngOnInit(): void {
        this.photo$ = this.photoService.findById(this.activatedRoute.snapshot.params.photoId);
    }
}
