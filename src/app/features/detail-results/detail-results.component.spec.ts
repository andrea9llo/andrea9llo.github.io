import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailResultsComponent } from './detail-results.component';

describe('DetailResultsComponent', () => {
  let component: DetailResultsComponent;
  let fixture: ComponentFixture<DetailResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
