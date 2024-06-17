import { ProductAddComponent } from './pages/admin/product-add/product-add.component';

import { Routes } from '@angular/router';
import { LayOutWebsiteComponent } from './component/website/lay-out-website/lay-out-website.component';
import { LayOutAdminComponent } from './component/admin/lay-out-admin/lay-out-admin.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ProductsEditComponent } from './pages/admin/products-edit/products-edit.component';
import { SignInComponent } from './pages/client/sign-in/sign-in.component';
import { SignUpComponent } from './pages/client/sign-up/sign-up.component';
import { privateRouterGuard } from './private-router.guard';



export const routes: Routes = [
    {
        path: "", component: LayOutWebsiteComponent, children: [
            { path: "signin", component: SignInComponent },
            { path: "signup", component: SignUpComponent },
        ]
    },
    {
        path: "admin", component: LayOutAdminComponent, canActivate: [privateRouterGuard], children: [
            { path: "", redirectTo: "/admin/products", pathMatch: "full" },
            { path: "products", component: ProductsComponent },
            { path: "products/add", component: ProductAddComponent },
            { path: "products/:id/edit", component: ProductsEditComponent },
        ]
    }
];
