import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldlogoComponent } from './fieldlogo.component';

describe('FieldlogoComponent', () => {
  let component: FieldlogoComponent;
  let fixture: ComponentFixture<FieldlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldlogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
