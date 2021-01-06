import { UiService } from './../../../services/ui.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() site:string = 'tinka';

  constructor(
    private uiService:UiService
  ) { }

  ngOnInit() {}

  navegateTo(site: string){
    this.uiService.navigateTo(`/${site}`);
  }

}
