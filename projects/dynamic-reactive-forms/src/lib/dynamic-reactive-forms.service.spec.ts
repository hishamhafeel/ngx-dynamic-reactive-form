import { TestBed } from '@angular/core/testing';

import { DynamicReactiveFormsService } from './dynamic-reactive-forms.service';

describe('DynamicReactiveFormsService', () => {
  let service: DynamicReactiveFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicReactiveFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
