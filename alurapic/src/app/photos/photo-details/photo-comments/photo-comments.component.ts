import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {
    
    commentForm: FormGroup;
    comments$: Observable<Array<PhotoComment>>;
    @Input() photoId: number;

    constructor(
        private formBuilder: FormBuilder,
        private photoService: PhotoService
    ) { }

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment: ['', [Validators.required, Validators.maxLength(300)]]
        })
    }
}
