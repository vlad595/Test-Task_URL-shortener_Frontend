import { Component, inject, Input } from '@angular/core';
import { UrlService } from '../../services/url-service';

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
  @Input() authorId: string = '';
  @Input() id: string = '';

  private service = inject(UrlService);

  userId = localStorage.getItem('userId');
  userRole = localStorage.getItem('role');

  async copyUrl(){
    try{
      await navigator.clipboard.writeText(this.shortenedUrl);
    }catch(error){
      console.error('Failed to copy url: ', error);
    }
  }
  deleteUrl(){
    this.service.deleteUrl(this.id).subscribe({
      error: (error) => {
        console.error("Deleting url error: ", error);
      }
    });
  }
}