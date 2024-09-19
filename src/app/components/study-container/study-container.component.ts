import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-study-container',
  templateUrl: './study-container.component.html',
  styleUrls: ['./study-container.component.scss']
})
export class StudyContainerComponent implements OnInit {

  @Input() title: string = "";
  @Output() onNextPage = new EventEmitter<string>();

  handleNextPage() {
    this.onNextPage.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
