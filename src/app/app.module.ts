import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './store/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
