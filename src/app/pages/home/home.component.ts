import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  siteMap = [
    {
      title: 'Aula 1 - Roteamento',
      urls: [
        'query-params?page=1&src=bis&token=d18b8624a0f5f721da7b82365fc562dd',
        'route-params/2',
        'nested/people',
        'nested/cities',
        'modular-routes/',
      ],
    },
  ];

  constructor(private router: Router) {}

  handleRedirect(url: string) {
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
  }

}
