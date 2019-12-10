import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;

    frase: any = {
        autor: 'Zlatan Ibrahimovic',
        mensaje: 'El dinero no es todo, mucho dinero es todo'
    };

    personajes: string[] = ['Cristiano Ronaldo', 'Lionel Messi', 'Kilyan Mbappe'];
}