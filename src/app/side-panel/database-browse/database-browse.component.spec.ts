import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {DatabaseBrowseComponent} from "./database-browse.component";

describe('DatabaseBrowseComponent', () => {
  let component: DatabaseBrowseComponent;
  let fixture: ComponentFixture<DatabaseBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseBrowseComponent]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
