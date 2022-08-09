import { TestBed } from '@angular/core/testing';

import { MyRegisterFormService } from './my-register-form.service';

describe('MyRegisterFormService', () => {
  let service: MyRegisterFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyRegisterFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
