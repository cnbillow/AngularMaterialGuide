import { TestBed, inject } from '@angular/core/testing';

import { TabDragDropService } from './tab-drag-drop.service';

describe('TabDragDropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabDragDropService]
    });
  });

  it('should be created', inject([TabDragDropService], (service: TabDragDropService) => {
    expect(service).toBeTruthy();
  }));
});
