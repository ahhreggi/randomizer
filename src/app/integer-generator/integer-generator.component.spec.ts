import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegerGeneratorComponent } from './integer-generator.component';

describe('IntegerGeneratorComponent', () => {
  let component: IntegerGeneratorComponent;
  let fixture: ComponentFixture<IntegerGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegerGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegerGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
