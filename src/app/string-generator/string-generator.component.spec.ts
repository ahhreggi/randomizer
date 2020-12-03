import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringGeneratorComponent } from './string-generator.component';

describe('StringGeneratorComponent', () => {
  let component: StringGeneratorComponent;
  let fixture: ComponentFixture<StringGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
