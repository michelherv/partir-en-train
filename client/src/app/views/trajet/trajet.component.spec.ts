import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetComponent } from './trajet.component';

describe('TarifComponent', () => {
  let component: TrajetComponent;
  let fixture: ComponentFixture<TrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrajetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
