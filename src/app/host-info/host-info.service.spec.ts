import { TestBed, inject } from '@angular/core/testing';

import { HostInfoService } from './host-info.service';

describe('HostInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostInfoService]
    });
  });

  it('should be created', inject([HostInfoService], (service: HostInfoService) => {
    expect(service).toBeTruthy();
  }));
});
