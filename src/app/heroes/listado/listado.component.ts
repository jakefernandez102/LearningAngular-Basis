import { Component } from '@angular/core';

@Component( {
  selector: 'app-listado',
  templateUrl: './listado.component.html',

} )
export class ListadoComponent {

  heroes: string[] = [ 'Ironman', 'Spiderman', 'Hulk', 'Thor', 'Capitan America' ];
  eliminado: string = '';

  borrarHeoroe() {

    this.eliminado = this.heroes.shift() || '';



  }


}
