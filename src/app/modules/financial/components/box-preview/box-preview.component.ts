import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FooService } from '../../pages/dashboard/foo.service';
@Component({
  selector: 'app-box-preview',
  templateUrl: './box-preview.component.html',
  styleUrls: ['./box-preview.component.scss'],
})
export class BoxPreviewComponent implements OnInit {
  @Input() value?: number | string = 0;
  @Output() onSelect = new EventEmitter();

  constructor(private fooService: FooService) {}

  ngOnInit(): void {
    this.fooService.data.subscribe((data) => {
    });
  }
  change() {
    this.fooService.changeRandomData();
  }
  handleSelect() {
    this.onSelect.emit();
  }

  ngOnChanges() {
    console.log("ngOnChanges DashboardComponent")
  }
}
