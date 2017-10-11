import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {UniprotListComponent} from "./uniprot-list.component"

describe('UniprotListComponent', () => {
  let component: UniprotListComponent;
  let fixture: ComponentFixture<UniprotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UniprotListComponent]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniprotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
