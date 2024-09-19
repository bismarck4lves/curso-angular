import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people = [
    "Ana Silva",
    "Carlos Pereira",
    "Maria Oliveira",
    "João Costa",
    "Beatriz Souza",
    "Lucas Mendes",
    "Fernanda Almeida",
    "Pedro Rocha",
    "Isabela Santos",
    "Ricardo Ferreira",
    "Sofia Martins",
    "Gabriel Lima",
    "Carolina Barbosa",
    "Eduardo Cardoso",
    "Luana Ribeiro",
    "Vinícius Gomes",
    "Amanda Farias",
    "Felipe Matos",
    "Juliana Teixeira",
    "Rafael Vieira"
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
