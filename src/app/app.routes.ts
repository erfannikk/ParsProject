import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './exmple/product/product.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {
        path:'',
        component: AppComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'header',
        component: HeaderComponent
    },
    {
        path:'product',
        component: ProductComponent
    }
];
