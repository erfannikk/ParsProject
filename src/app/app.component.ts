import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ContentComponent } from './content/content.component';
import { ExmpleComponent } from './exmple/exmple.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,   
    HeaderComponent,   
    SliderComponent,   
    ContentComponent,   
    ExmpleComponent,   
    FooterComponent,   
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
  title = 'primeng';
}
