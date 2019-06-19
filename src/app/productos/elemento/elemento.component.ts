import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Elemento",
    moduleId: module.id,
    templateUrl: "./elemento.component.html",
    styleUrls: ['./elemento.component.scss']
})
export class ElementoComponent implements OnInit {
    botonesArr:any[] = [];
    constructor() {
    }

    ngOnInit(): void {
        this.botonesArr = [
            {label:'Indexar', diferencia:2},
            {label:'Consultas', diferencia:4},
            {label:'I/O', diferencia:1},
            {label:'BOM', diferencia:5}
        ]
    }

    alerta(){
        console.log("hola");
    }
}
