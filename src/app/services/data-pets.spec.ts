import { TestBed } from '@angular/core/testing';

import { DataPets } from './data-pets';

describe('DataPets', () => {
  let service: DataPets;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPets);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
