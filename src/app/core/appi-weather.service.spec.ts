import { TestBed } from '@angular/core/testing';

import { AppiWeatherService } from './appi-weather.service';

describe('AppiWeatherService', () => {
  let service: AppiWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppiWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); 