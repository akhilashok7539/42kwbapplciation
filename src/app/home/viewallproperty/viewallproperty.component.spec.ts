import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallpropertyComponent } from './viewallproperty.component';

describe('ViewallpropertyComponent', () => {
  let component: ViewallpropertyComponent;
  let fixture: ComponentFixture<ViewallpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallpropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
