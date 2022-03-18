import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditankietaComponent } from './editankieta.component';

describe('EditankietaComponent', () => {
  let component: EditankietaComponent;
  let fixture: ComponentFixture<EditankietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditankietaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditankietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
