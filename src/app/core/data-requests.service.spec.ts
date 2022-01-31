import { TestBed } from '@angular/core/testing';

import { DataRequestsService } from './data-response.service';

describe('DataRequestsService', () => {
  let service: DataRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
