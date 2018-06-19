import { TestBed, inject } from '@angular/core/testing';

import { RecepiesService } from './recepies.service';

describe('RecepiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecepiesService]
    });
  });

  it('should be created', inject([RecepiesService], (service: RecepiesService) => {
    expect(service).toBeTruthy();
  }));
});
