import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballistComponent } from './footballist.component';

describe('FootballistComponent', () => {
  let component: FootballistComponent;
  let fixture: ComponentFixture<FootballistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
