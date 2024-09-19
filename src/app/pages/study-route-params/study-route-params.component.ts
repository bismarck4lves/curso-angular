import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-study-route-params',
  templateUrl: './study-route-params.component.html',
  styleUrls: ['./study-route-params.component.scss']
})
export class StudyRouteParamsComponent implements OnInit {

  currentPage: number = 0;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router: Router
  ) { }

  incrementPage() {
    this.router.navigate([`route-params/${this.currentPage +  1}`])
  }

  ngOnInit(): void {
    // @ts-ignore
    // this.currentPage = parseInt(this.activatedRoute.snapshot.params.page)
    // this.currentPage = parseInt(this.activatedRoute.snapshot.paramMap.get("page"))
    this.activatedRoute.paramMap.subscribe(params=> {
      this.currentPage  = parseInt(params.get("page") || "0")
    })
  }

  nextPage( ) {
    this.router.navigate(['modular-routes']);
  }
}
