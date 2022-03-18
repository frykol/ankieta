import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkietadivComponent } from './ankietadiv.component';

describe('AnkietadivComponent', () => {
  let component: AnkietadivComponent;
  let fixture: ComponentFixture<AnkietadivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnkietadivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkietadivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
