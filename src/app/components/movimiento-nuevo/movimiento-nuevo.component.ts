// Contenido de: src/app/components/movimiento-nuevo/movimiento-nuevo.component.ts

import { Component, Input } from '@angular/core';
import { Movimientos } from '../../interfaces/movimientos';
import { IonLabel, IonCard, IonItem, IonButton } from '@ionic/angular';

@Component({
  selector: 'movimiento-nuevo',
  templateUrl: './movimiento-nuevo.component.html',
  styleUrls: ['./movimiento-nuevo.component.scss'],
  standalone: true, // ¡La línea clave! Le decimos a Angular que este componente es independiente.
  imports: [IonLabel, IonCard, IonItem, IonButton] // Dejamos el array de imports vacío por ahora. Lo llenaremos en la siguiente sección.
 // Dejamos el array de imports vacío por ahora. Lo llenaremos en la siguiente sección.
 // Dejamos el array de imports vacío por ahora. Lo llenaremos en la siguiente sección.
 // Dejamos el array de imports vacío por ahora. Lo llenaremos en la siguiente sección.
 // Dejamos el array de imports vacío por ahora. Lo llenaremos en la siguiente sección.
})
export class MovimientoNuevoComponent {

  @Input() movimiento!: Movimientos;

  constructor() { }

  mostrarDetalles() {
    console.log('Datos del movimiento:', this.movimiento);
  }

}