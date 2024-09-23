import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-box-preview',
  templateUrl: './box-preview.component.html',
  styleUrls: ['./box-preview.component.scss'],
})
export class BoxPreviewComponent implements OnInit {
  @Input() value?: number | string = 0;
  @Input() title?: string = "";

  constructor() {}

  ngOnInit(): void {
  
  }
  
}
