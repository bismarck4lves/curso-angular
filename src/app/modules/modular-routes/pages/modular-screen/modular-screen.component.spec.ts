import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularScreenComponent } from './modular-screen.component';

describe('ModularScreenComponent', () => {
  let component: ModularScreenComponent;
  let fixture: ComponentFixture<ModularScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModularScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModularScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
