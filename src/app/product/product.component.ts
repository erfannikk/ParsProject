import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ButtonModule,
    InputNumberModule,
    FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(){}
  loading: boolean = false;

    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }

    value1: number = 1;
    picture = [
      { id: 1, img: 'image/phone2.png', alt: ' ایفون 13 ' },
    ];

    list = [
      { id: 1, photo: 'image/exm.jpg', alt: ' ایفون 13 ' },
      { id: 2, photo: 'image/exm2.jpg', alt: ' ایفون 13 ' },
      { id: 3, photo: 'image/exm3.jpg', alt: ' ایفون 13 ' },
      { id: 4, photo: 'image/exm4.jpg', alt: ' ایفون 13 ' }
    ]

    items = [
      { id: 1, title: 'image/pic.jpg', alt: ' لوازم خانگی ' },
      { id: 2, title: 'image/pic2.jpg', alt: ' لوازم خانگی ' },
      { id: 3, title: 'image/pic3.jpg', alt: ' لوازم خانگی ' },
      { id: 4, title: 'image/pic4.jpg', alt: ' لوازم خانگی ' }
    ]
}
