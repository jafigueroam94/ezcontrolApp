import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Botones",
    moduleId: module.id,
    templateUrl: "./botones.component.html",
    styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
    botonesArr:any[] = [];
    constructor() {
    }

    ngOnInit(): void {
        this.botonesArr = [
            {label:'Indexar'},
            {label:'Consultas'},
            {label:'I/O'},
            {label:'BOM'}
        ]
    }

    alerta(){
        console.log("hola");
    }
}
