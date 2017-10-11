import {CompoundListComponent} from "./compound-list.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

describe('CompoundListComponent', () => {
  let component: CompoundListComponent;
  let fixture: ComponentFixture<CompoundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompoundListComponent]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
