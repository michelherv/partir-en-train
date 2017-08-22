import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GareComponent } from './gare.component';

describe('GareComponent', () => {
  let component: GareComponent;
  let fixture: ComponentFixture<GareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GareComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
