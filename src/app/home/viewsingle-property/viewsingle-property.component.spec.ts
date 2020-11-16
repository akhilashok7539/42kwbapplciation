import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsinglePropertyComponent } from './viewsingle-property.component';

describe('ViewsinglePropertyComponent', () => {
  let component: ViewsinglePropertyComponent;
  let fixture: ComponentFixture<ViewsinglePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsinglePropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsinglePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
