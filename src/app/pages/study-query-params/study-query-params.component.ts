import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-study-query-params',
  templateUrl: './study-query-params.component.html',
  styleUrls: ['./study-query-params.component.scss'],
})
export class StudyQueryParamsComponent implements OnInit {
  qsValues: any = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router
) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.qsValues = JSON.stringify(res);
    });
  }

  nextPage() {
    this.router.navigate([`route-params/2`])
  }
}
