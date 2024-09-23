import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooService {
  data = new BehaviorSubject<any>(null);
  changeRandomData() {
    this.data.next(Math.random());
  }
}
