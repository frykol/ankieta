import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllankietyComponent } from './allankiety.component';

describe('AllankietyComponent', () => {
  let component: AllankietyComponent;
  let fixture: ComponentFixture<AllankietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllankietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllankietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
