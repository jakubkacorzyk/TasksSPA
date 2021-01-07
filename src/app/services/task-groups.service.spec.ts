import { TestBed } from '@angular/core/testing';

import { TaskGroupsService } from './task-groups.service';

describe('TaskGroupsService', () => {
  let service: TaskGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
