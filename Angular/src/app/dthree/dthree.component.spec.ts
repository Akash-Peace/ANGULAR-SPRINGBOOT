import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DthreeComponent } from './dthree.component';

describe('DthreeComponent', () => {
  let component: DthreeComponent;
  let fixture: ComponentFixture<DthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
