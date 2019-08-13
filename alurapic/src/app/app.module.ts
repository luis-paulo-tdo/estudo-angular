import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { PhotosModule } from './photos/photo.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PhotosModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
