import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChileprouductComponent } from './chileprouduct.component';

describe('ChileprouductComponent', () => {
  let component: ChileprouductComponent;
  let fixture: ComponentFixture<ChileprouductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChileprouductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChileprouductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
