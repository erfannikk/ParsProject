import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { url } from 'inspector';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, NgClass],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentComponent {
  constructor() {}

  imageurl = 'public/image';
  photo = [
    { id: 1, imageurl: '/image/baner.jpg', alt: 'کیف و کفش' },
    { id: 2, imageurl: '/image/baner2.jpg', alt: 'کیف و کفش' },
    { id: 3, imageurl: '/image/baner3.jpg', alt: 'کیف و کفش' },
    { id: 4, imageurl: '/image/baner4.jpg', alt: 'کیف و کفش' },
  ];
}
