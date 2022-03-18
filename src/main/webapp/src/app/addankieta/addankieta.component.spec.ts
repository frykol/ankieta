import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddankietaComponent } from './addankieta.component';

describe('AddankietaComponent', () => {
  let component: AddankietaComponent;
  let fixture: ComponentFixture<AddankietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddankietaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddankietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
