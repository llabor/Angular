import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SqrtPipe } from './app.sqrt';
import { EurosPipe } from './euros.pipe';


@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    EurosPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
