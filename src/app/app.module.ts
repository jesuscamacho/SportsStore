import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from './store/store.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, StoreModule],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
