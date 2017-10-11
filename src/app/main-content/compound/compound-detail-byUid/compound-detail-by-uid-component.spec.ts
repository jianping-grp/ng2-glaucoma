import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CompoundDetailByUidComponent} from "./compound-detail-by-uid.component";


describe('CompoundDetailByUidComponent', () => {
  let component: CompoundDetailByUidComponent;
  let fixture: ComponentFixture<CompoundDetailByUidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundDetailByUidComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundDetailByUidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
