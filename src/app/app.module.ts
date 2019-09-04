import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErikComponent } from './erik/erik.component';
import { PedroComponent } from './pedro/pedro.component';

@NgModule({
  declarations: [
    AppComponent,
    ErikComponent,
    PedroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
