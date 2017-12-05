import {UniprotAllPathwayComponent} from "./uniprot-all-pathway.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

describe('UniprotAllPathwayComponent', () => {
  let component: UniprotAllPathwayComponent;
  let fixture: ComponentFixture<UniprotAllPathwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule( {
      declarations: [UniprotAllPathwayComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniprotAllPathwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})
