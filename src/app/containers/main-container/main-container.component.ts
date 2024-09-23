import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotToFinancial() {
    this.router.navigate(['financial']);
  }
}
