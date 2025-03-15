import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
  title = 'primeng';
}
