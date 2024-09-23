import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  inflows = 3740
  outflows = 1200

  constructor() {
  }

  ngOnInit(): void {
  }


  
}
