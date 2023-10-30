import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss']
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = "";

  public hasLoaded: boolean = false;
  ngOnInit(): void {
    if (!this.url) throw new Error('Url es requerido')
  }

  onLoaded() {
    console.log('object');
    this.hasLoaded = true;
  }

}
