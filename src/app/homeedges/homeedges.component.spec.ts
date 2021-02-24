import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeedgesComponent } from './homeedges.component';

describe('HomeedgesComponent', () => {
  let component: HomeedgesComponent;
  let fixture: ComponentFixture<HomeedgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeedgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeedgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
