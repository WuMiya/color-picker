import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorPhotoshopModule } from 'ngx-color/photoshop';
import { ColorHueModule }  from 'ngx-color/hue';

import { AppComponent } from './app.component';
import { ColorPickerModule } from './color-picker/color-picker.module';

@NgModule({
  declarations: [
    AppComponent,
    //ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    FormsModule,
    ColorSketchModule,
    ColorPhotoshopModule,
    ColorHueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
