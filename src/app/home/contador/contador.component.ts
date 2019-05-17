import { Component, OnInit } from "@angular/core";
import { IState } from "../../data/interfaces/state.interface";
import { Store } from "@ngrx/store";
import { MultiplicarAction, DividirAction } from "../../data/data.actions";
@Component({
    selector: "contador",
    templateUrl: "./contador.component.html",
    styles: ["./contador.component.css"]
})
export class ContadorComponent implements IState {
data: any;
constructor(private store: Store<IState>) {
    this.store.subscribe((state) => {
        this.data = state.data;
    });
}

dividir() {
    const accion = new DividirAction(5);
    this.store.dispatch(accion);
}

multiplicar() {
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
}

}
