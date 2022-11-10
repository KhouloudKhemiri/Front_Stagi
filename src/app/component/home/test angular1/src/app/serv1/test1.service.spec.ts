import { TestBed } from '@angular/core/testing';

import { Test1Service } from './test1.service';

describe('Test1Service', () => {
  let service: Test1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Test1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
