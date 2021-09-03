import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appId: string = "";
  constructor(private configService: ConfigService) {
    configService.config$.subscribe(c => {
      this.appId = c?.appId ?? "";
    })
   }

  ngOnInit(): void {
  }

}
