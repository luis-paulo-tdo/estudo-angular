import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { PhotosModule } from './photos/photo.module';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ErrorsModule,
    PhotosModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
