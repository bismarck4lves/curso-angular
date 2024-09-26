import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit {
  pages = [
    {
      path: 'financial',
      value: 'Financeiro',
    },
    {
      path: 'clients',
      value: 'Clientes',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotToPath(url: string) {
    this.router.navigate([url]);
  }
}
