import { TestBed } from '@angular/core/testing';

import { DataCuidadores } from './data-cuidadores';

describe('DataCuidadores', () => {
  let service: DataCuidadores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCuidadores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
