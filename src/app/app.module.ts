import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// SEARCH
import { SearchMainComponent } from "./search/search.module";
import { SearchComponent } from "./search/search.component";

// HOME
import { HomeMainComponent } from "./home/home.module";
import { HomeComponent } from "./home/home.component";

// SETTINGS
import { SettingsMainComponent } from "./settings/settings.module";
import { SettingsComponent } from "./settings/settings.component";

// PROOVEDORES
import { ProveedoresMainComponent } from "./proveedores/proveedores.module";
import { ProveedoresComponent } from "./proveedores/proveedores.component";

// CLIENTES
import { ClientesMainComponent } from "./clientes/clientes.module";
import { ClientesComponent } from "./clientes/clientes.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        SearchMainComponent,
        SearchComponent,
        HomeMainComponent,
        HomeComponent,
        SettingsMainComponent,
        SettingsComponent,
        ProveedoresMainComponent,
        ProveedoresComponent,
        ClientesMainComponent,
        ClientesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
