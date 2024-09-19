import { TestBed } from '@angular/core/testing';

import { AppiNewsService } from './appi-news.service';

describe('AppiNewsService', () => {
  let service: AppiNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppiNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); 
