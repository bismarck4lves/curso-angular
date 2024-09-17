import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities = [
    "São Paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
    "Curitiba",
    "Porto Alegre",
    "Brasília",
    "Salvador",
    "Recife",
    "Fortaleza",
    "Manaus",
    "Belém",
    "Goiânia",
    "Florianópolis",
    "Vitória",
    "Campinas",
    "Santos",
    "João Pessoa",
    "Maceió",
    "Natal",
    "Aracaju"
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
