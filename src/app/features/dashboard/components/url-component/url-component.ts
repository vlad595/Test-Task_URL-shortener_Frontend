import { Component, inject, Input } from '@angular/core';
import { UrlService } from '../../services/url-service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
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

  toastSubject = new BehaviorSubject<boolean>(false);
  showToast = this.toastSubject.asObservable();

  userId = localStorage.getItem('userId');
  userRole = localStorage.getItem('role');

  async copyUrl(){
    try{
      await navigator.clipboard.writeText(this.shortenedUrl);
      this.toastSubject.next(true);
      setTimeout(() => {
        this.toastSubject.next(false);
      }, 2500);
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