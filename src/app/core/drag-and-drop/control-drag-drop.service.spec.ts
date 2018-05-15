import { TestBed, inject } from '@angular/core/testing';

import { ControlDragDropService } from './control-drag-drop.service';

describe('ControlDragDropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlDragDropService]
    });
  });

  it('should be created', inject([ControlDragDropService], (service: ControlDragDropService) => {
    expect(service).toBeTruthy();
  }));
});
