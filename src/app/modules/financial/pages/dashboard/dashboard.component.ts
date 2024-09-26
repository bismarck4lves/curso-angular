import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  inflows = 3740;
  outflows = 1200;
  conditionIf = false;
  divNgStyleColor = 'black';

  divNgClass = ['class-solo', 'class-directives'];

  options = ['a', 'b', 'c'];

  options2 = [{ value: 'd' }, { value: 'e' }, { value: 'f' }];

  optionsObject = {
    name: 'angular',
    release: '13',
    usage: 'curso',
  };

  itemsTrackBy = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  constructor() {}

  ngOnInit(): void {}

  changeColor(val: string) {
    this.divNgStyleColor = val;
  }

  changeCondition() {
    this.conditionIf = !this.conditionIf;
  }
  funcTrackBy(item: any) {
    return item.id;
  }
}
