import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exmple',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './exmple.component.html',
  styleUrl: './exmple.component.scss'
})
export class ExmpleComponent {
  photo = [ 
    { Id: '1',picture: 'image/example/fv.jpg',alt: ' خودرو ',para: ' خودرو هيونداي اتوماتيک سال 2017 فول آپشن  ' },
    { Id: '2',picture: 'image/example/fv2.jpg',alt: ' گوشی ایفون13  ',para: '  گوشی موبایل اپل مدل iPhone 13  دو سیم‌ کارت  ' },
    { Id: '3',picture: 'image/example/fv3.png',alt: ' گوشی ایفون13 ',para: ' آیفون 13 پرو مکس 512 گیگابایت دو سیمکارت  ' },
    { Id: '4',picture: 'image/example/fv4.jpg',alt: ' کوله پشتی ',para: ' کوله پشتی میلت مدل  ' },
    { Id: '5',picture: 'image/example/fv5.png',alt: ' ساعت مچی ',para: ' ساعت مچی عقربه ای سون فرایدی مدل  ' },
    { Id: '6',picture: 'image/example/fv6.png',alt: ' کوله ',para: ' کوله پشتی میلت مدل PEUTEREY INTEGRALE ' },
    { Id: '7',picture: 'image/example/fv7.png',alt: ' گوشی ایفون13 پرومکس ',para: ' گوشی موبایل اپل مدل iPhone 13 Pro Max ' },
    { Id: '8',picture: 'image/example/fv8.png',alt: ' اپل واچ ',para: ' اپل واچ سری 7 نسخه 41 میلی متری نارنجی  ' },
    { Id: '9',picture: 'image/example/fv9.png',alt: ' برگه قیسی ',para: ' برگه قیسی اعلا طبیعی کرنلو ناتس  ' },
    { Id: '10',picture: 'image/example/fv10.png',alt: ' ساعن عقربه ای ای سون ',para: ' ساعت مچی عقربه ای سون فرایدی مدل  ' },
    { Id: '11',picture: 'image/example/fv11.png',alt: ' هدفون ',para: ' هدفون مخصوص بازی اونیکوما مدل  ' },
    { Id: '12',picture: 'image/example/fv12.png',alt: ' هدفون بی سیم ',para: ' هدفون بی سیم سامسونگ مدل  ' }
  ]
}
