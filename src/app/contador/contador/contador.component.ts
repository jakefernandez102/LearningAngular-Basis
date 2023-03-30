import { Component } from '@angular/core';


@Component( {
    selector: 'app-contador',
    template: `
    
        <h1>{{title}} </h1>
        <h3>La base es: <strong></strong>{{base}}</h3>
        <button (click)="acumular(-base) ">- {{base}}</button>

        <span> {{num}} </span>

        <button (click)=" acumular(base)">+ {{base}}</button>

    `
} )
export class ContadorComponent {
    public title: string = 'Contrador App';
    public num: number = 0;
    public base: number = 5;


    acumular ( valor: number ) {
        this.num += valor;
    }
}