import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ProductosMainComponent } from "./productos/productos.module";
import { HomeMainComponent } from "./home/home.module";
import { SettingsMainComponent } from "./settings/settings.module";
import { ProveedoresMainComponent } from "./proveedores/proveedores.module";
import { ClientesMainComponent } from "./clientes/clientes.module";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "homeMain",
        pathMatch: "full"
    },
    {
        path: "homeMain",
        component: HomeMainComponent
    },
    {
        path: "productosMain",
        component: ProductosMainComponent
    },
    {
        path: "settingsMain",
        component: SettingsMainComponent
    },
    {
        path: "proveedoresMain",
        component: ProveedoresMainComponent
    },
    {
        path: "clientesMain",
        component: ClientesMainComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
