import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { addCustomNumber, decrement, increment, reset } from '../store/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent implements OnInit, OnDestroy {
  count: number;
  sub: Subscription;
  customNumber:number;
  constructor(private store: Store<{ count: number }>) {
    this.sub = store.select('count').subscribe((data) => {
      this.count = data;
    });
  }

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }

  addCustomNumber(){
    this.store.dispatch(addCustomNumber({num: +this.customNumber}))
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
