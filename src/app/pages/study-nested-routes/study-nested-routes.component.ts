import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-study-nested-routes',
  templateUrl: './study-nested-routes.component.html',
  styleUrls: ['./study-nested-routes.component.scss'],
})
export class StudyNestedRoutesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mockProcess()
  }

  showPeople() {
    this.router.navigate(['nested/people']);
  }

  showCities() {
    this.router.navigate(['nested/cities']);
  }

  mockProcess() {
    console.log('Processo iniciado...');
    setTimeout(() => {
      console.log('Processo finalizado após 3 segundos.');
    }, 3000);
  }
}
