import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PojankietaComponent } from './pojankieta.component';

describe('PojankietaComponent', () => {
  let component: PojankietaComponent;
  let fixture: ComponentFixture<PojankietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PojankietaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PojankietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
