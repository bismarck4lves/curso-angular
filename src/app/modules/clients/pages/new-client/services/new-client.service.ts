import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewClientService {
  mainForm = new BehaviorSubject({} as any);
  constructor() {}

  addAddress(address: any) {
    const current = this.mainForm.value;
    this.mainForm.next({ ...current, ...{ address } });
  }
}
