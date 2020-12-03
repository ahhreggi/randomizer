import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobRossIpsumComponent } from './bob-ross-ipsum.component';

describe('BobRossIpsumComponent', () => {
  let component: BobRossIpsumComponent;
  let fixture: ComponentFixture<BobRossIpsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BobRossIpsumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BobRossIpsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
