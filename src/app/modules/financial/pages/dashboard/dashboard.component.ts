import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { FooService } from './foo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy, OnInit, DoCheck {
  count = 0;
  constructor(private fooService: FooService) {
    console.log('contructor DashboardComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit DashboardComponent');
    this.fooService.data.subscribe((res) => console.log(res));
  }

  handleSelectInput() {}

  ngDoCheck() {
    console.log('ngDoCheck DashboardComponent');
  }

  ngOnChanges() {
    console.log('ngOnChanges DashboardComponent');
  }
  ngOnDestroy() {
    this.fooService.data.unsubscribe()
  }

  handleSelectOutput() {}

  increment() {
    this.count++;
  }
}
