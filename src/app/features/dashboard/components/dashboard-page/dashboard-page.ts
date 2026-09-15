import { Component } from '@angular/core';
import { HeaderComponent } from '../header-component/header-component';
import { UrlsBoard } from '../urls-board/urls-board';
import { UrlCreation } from '../url-creation/url-creation';

@Component({
  imports: [HeaderComponent, UrlsBoard, UrlCreation],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.css',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {}
