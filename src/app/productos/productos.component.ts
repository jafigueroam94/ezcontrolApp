import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: "Productos",
    moduleId: module.id,
    templateUrl: "./productos.component.html"
})
export class ProductosComponent implements OnInit {
    productosArr : any[] =[];
    constructor() {
        // Use the component constructor to inject providers.
        if(appSettings.hasKey('productosArr')){
            if(appSettings.getString('productosArr')!=undefined){
                this.productosArr = appSettings.getString('productosArr').split(',');
                this.productosArr = this.productosArr.map(producto => JSON.parse(producto));
            }
        }
        else{
            this.productosArr=[
                {nombre: 'Jamon'},
                {nombre: 'Huevos'},
                {nombre: 'Leche'}
            ]
        }
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    setNuevoProducto(){
        this.productosArr.push({nombre:'Tocino'});
        let productosArr = this.productosArr.map(producto=>JSON.stringify(producto));
        let productosArrString = productosArr.join(',');
        appSettings.setString("productosArr", productosArrString);
    }

    alerta(producto:any){
        dialogs.alert({
            title: "Producto",
            message: producto.nombre,
            okButtonText: "Aceptar"
        }).then(() => {
                console.log("Dialog closed!");
        });
    }
}
