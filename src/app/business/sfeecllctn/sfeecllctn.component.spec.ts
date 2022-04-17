import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfeecllctnComponent } from './sfeecllctn.component';

describe('SfeecllctnComponent', () => {
  let component: SfeecllctnComponent;
  let fixture: ComponentFixture<SfeecllctnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfeecllctnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfeecllctnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
