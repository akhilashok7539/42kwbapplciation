import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpannelComponent } from './adminpannel.component';

describe('AdminpannelComponent', () => {
  let component: AdminpannelComponent;
  let fixture: ComponentFixture<AdminpannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
