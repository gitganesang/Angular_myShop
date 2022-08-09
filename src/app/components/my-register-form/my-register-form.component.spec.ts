import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRegisterFormComponent } from './my-register-form.component';

describe('MyRegisterFormComponent', () => {
  let component: MyRegisterFormComponent;
  let fixture: ComponentFixture<MyRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
