import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-url-component',
  styleUrl: './url-component.css',
  templateUrl: './url-component.html',
})
export class UrlComponent {
  @Input() originalUrl: string = '';
  @Input() shortenedUrl: string = '';
  @Input() createdAt: string = '';
  @Input() clickCount: number = 0;

  async copyUrl(){
    try{
      await navigator.clipboard.writeText(this.shortenedUrl);
    }catch(error){
      console.error('Failed to copy url: ', error);
    }
  }
}
