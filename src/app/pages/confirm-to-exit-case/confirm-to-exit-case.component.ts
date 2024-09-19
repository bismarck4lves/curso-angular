import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-to-exit-case',
  templateUrl: './confirm-to-exit-case.component.html',
  styleUrls: ['./confirm-to-exit-case.component.scss'],
})
export class ConfirmToExitCaseComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  canDeactivate(): boolean {
    return window.confirm(
      'Você tem alterações não salvas. Tem certeza de que deseja sair?'
    );
  }

  getOut() {
    this.route.navigate(['query-params']);
  }
}
