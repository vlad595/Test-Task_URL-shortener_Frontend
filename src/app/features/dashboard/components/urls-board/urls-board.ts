import { Component, inject } from '@angular/core';
import { UrlComponent } from '../url-component/url-component';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { UrlResponseModel } from '../../models/url.model'; 
import { UrlService } from '../../services/url-service';

@Component({
  imports: [UrlComponent, AsyncPipe],
  selector: 'app-urls-board',
  styleUrl: './urls-board.css',
  templateUrl: './urls-board.html',
})
export class UrlsBoard {
  private service = inject(UrlService)
  links$ = this.service.links$;

  ngOnInit(){
    this.service.getUrlsList();
  }
}
