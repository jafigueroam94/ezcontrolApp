import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { BarcodeScanner } from 'nativescript-barcodescanner';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// REDUX
import { StoreModule } from "@ngrx/store";
import { DataReducer } from "./data/data.reducer";

// PRODUCTOS
import { ProductosMainComponent } from "./productos/productos.module";
import { ProductosComponent } from "./productos/productos.component";

// HOME
import { HomeMainComponent } from "./home/home.module";
import { HomeComponent } from "./home/home.component";
import { ContadorComponent } from "./home/contador/contador.component";
import { ScannerComponent } from "./home/scanner/scanner.component";

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
        NativeScriptUISideDrawerModule,
        StoreModule.forRoot({ data: DataReducer })
    ],
    declarations: [
        AppComponent,
        ProductosMainComponent,
        ProductosComponent,
        HomeMainComponent,
        HomeComponent,
        ContadorComponent,
        ScannerComponent,
        SettingsMainComponent,
        SettingsComponent,
        ProveedoresMainComponent,
        ProveedoresComponent,
        ClientesMainComponent,
        ClientesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers : [
        BarcodeScanner
    ]
})
export class AppModule { }
