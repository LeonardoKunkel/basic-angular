import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  deletedHero: string = '';

  borrarHeroe() {
    this.deletedHero = this.heroes.pop() || '';
  }
}
