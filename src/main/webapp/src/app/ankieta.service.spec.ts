import { TestBed } from '@angular/core/testing';

import { AnkietaService } from './ankieta.service';

describe('AnkietaService', () => {
  let service: AnkietaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnkietaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
