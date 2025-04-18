import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragableDesignationComponent } from './dragable-designation.component';

describe('DragableDesignationComponent', () => {
  let component: DragableDesignationComponent;
  let fixture: ComponentFixture<DragableDesignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragableDesignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragableDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
