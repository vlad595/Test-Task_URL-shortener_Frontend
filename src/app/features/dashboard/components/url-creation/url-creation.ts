import { Component, inject } from '@angular/core';
import { UrlService } from '../../services/url-service';
import { BehaviorSubject } from 'rxjs';
import { UrlCreationModel, UrlResponseModel } from '../../models/url.model';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, AsyncPipe],
  selector: 'app-url-creation',
  styleUrl: './url-creation.css',
  templateUrl: './url-creation.html',
})
export class UrlCreation {
  ulrSubject = new BehaviorSubject<string>('');
  shortenedUrl = this.ulrSubject.asObservable()

  private readonly service = inject(UrlService);

  links$ = this.service.links$;

  urlForm = new FormGroup({
    originalUrl: new FormControl('')
  })

  async copyUrl(){
    try{
      await navigator.clipboard.writeText(this.ulrSubject.value);
    }catch(error){
      console.error('Failed to copy url: ', error);
    }
  }

  onSubmit(){
    if (this.urlForm.valid){
      const urlCreation: UrlCreationModel = {
        originalUrl: this.urlForm.value.originalUrl!
      }

      this.service.createShortUrl(urlCreation).subscribe({
        next: (response: UrlResponseModel) => {
          this.ulrSubject.next(response.shortenedUrl);
        },
        error: (error) => {
          console.error('Processing url error: ', error);
        }
      });
    }
  }
}
