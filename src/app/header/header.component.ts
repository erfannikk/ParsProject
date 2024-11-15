import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import {MatIconModule} from '@angular/material/icon';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit{
  constructor(){}

  myform: FormGroup;

  ngOnInit(): void {
    this.myform = new FormGroup({
      search: new FormControl('' , [Validators.required])
    });
    
};
clicked(){
      console.log(this.myform)
    }
    
}
