import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {UniprotDetailComponent} from "./uniprot-by-cid.component"

describe('UniprotDetailComponent', () => {
  let component: UniprotDetailComponent;
  let fixture: ComponentFixture<UniprotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UniprotDetailComponent]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniprotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
