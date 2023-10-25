import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="form-control" name="" id="" (keyup.enter)="searchTag()" placeholder="Buscar gifs" #textInput>
  `,
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @ViewChild('textInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) {

  }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = ''
  }
}
