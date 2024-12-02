import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellComponent } from './my-cell.component';

describe('MyCellComponent', () => {
  let component: MyCellComponent;
  let fixture: ComponentFixture<MyCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
