import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

    id: number;
    
    constructor(private activatedRoute: ActivatedRoute) { }
    
    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.photoId;
    }
}
