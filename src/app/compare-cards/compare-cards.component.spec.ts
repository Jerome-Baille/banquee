import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCardsComponent } from './compare-cards.component';

describe('CompareCardsComponent', () => {
  let component: CompareCardsComponent;
  let fixture: ComponentFixture<CompareCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
