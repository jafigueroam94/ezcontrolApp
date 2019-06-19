import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Cortos",
    moduleId: module.id,
    templateUrl: "./cortos.component.html",
    styleUrls: ['./cortos.component.scss']
})
export class CortosComponent implements OnInit {
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
