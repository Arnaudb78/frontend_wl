import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordsServicesComponent } from './coords-services.component';

describe('CoordsServicesComponent', () => {
  let component: CoordsServicesComponent;
  let fixture: ComponentFixture<CoordsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordsServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoordsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
