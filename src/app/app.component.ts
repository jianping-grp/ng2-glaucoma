import {AfterViewChecked, ChangeDetectorRef, Component} from '@angular/core';
import {GlobalService} from "./service/global/global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  title = 'app';
  loadingStatus : boolean;

  constructor(private globalService: GlobalService,
              private cd: ChangeDetectorRef) {
    this.globalService.loadingStatus
      .subscribe( status => this.loadingStatus = status)
  }

  //todo: workaround for ExpressionChangedAfterItHasBeenCheckedError
  ngAfterViewChecked() {
    this.cd.detectChanges()
  }
}
