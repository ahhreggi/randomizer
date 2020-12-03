import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRandomizerComponent } from './list-randomizer.component';

describe('ListRandomizerComponent', () => {
  let component: ListRandomizerComponent;
  let fixture: ComponentFixture<ListRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRandomizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
