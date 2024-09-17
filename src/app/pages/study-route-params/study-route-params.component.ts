import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-study-route-params',
  templateUrl: './study-route-params.component.html',
  styleUrls: ['./study-route-params.component.scss']
})
export class StudyRouteParamsComponent implements OnInit {

  currentPage: number = 0

  constructor(
    private activatedRoute:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.handleSetCurrentPage()
  }

  handleSetCurrentPage() {
    // @ts-ignore
    // this.currentPagination = parseInt( this.activatedRoute?.snapshot?.params?.paginaId)
    // this.currentPagination = parseInt(this.activatedRoute.snapshot.paramMap.get("paginaId") || "0");
    this.activatedRoute.paramMap.subscribe(params => {
      this.currentPage = parseInt(params.get('page') ||"0");
    });
  }

  incrementPage() {
    this.router.navigate([`route-params/${this.currentPage +  1}`])
  }
  
  nextPage( ) {
    this.router.navigate(['modular-routes']);
  }
}
