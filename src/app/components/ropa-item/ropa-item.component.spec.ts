import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaItemComponent } from './ropa-item.component';

describe('RopaItemComponent', () => {
  let component: RopaItemComponent;
  let fixture: ComponentFixture<RopaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RopaItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
