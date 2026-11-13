import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';

import { Movimientos } from '../interfaces/movimientos';
import { MovimientoNuevoComponent } from '../components/movimiento-nuevo/movimiento-nuevo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonItem,
    IonCheckbox,
    IonLabel,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButtons,
    IonIcon,
    RouterLink,
    MovimientoNuevoComponent,
    CommonModule
  ]
})
export class HomePage {

  listaDeMovimientos: Movimientos[] = [
    { id: 1, titulo: 'Hacer la compra mercadona', razon: 'Comida', cantidad: 50, pagado: true, tipo: 'gasto' },
    { id: 2, titulo: 'Suscripcion Netflix', razon: 'Ocio', cantidad: 20, pagado: false, tipo: 'gasto' },
    { id: 3, titulo: 'Nothing Phone 4a', razon: 'Tecnologia', cantidad: 250, pagado: false, tipo: 'gasto' },
    { id: 4, titulo: 'Nómina', razon: 'Trabajo', cantidad: 1500, pagado: true, tipo: 'ingreso' },
    { id: 5, titulo: 'Pago Bizum', razon: 'Bizum', cantidad: 100, pagado: true, tipo: 'ingreso' },
    {id: 6, titulo: 'Taller de coche', razon: 'Coche', cantidad: 300, pagado: true, tipo: 'gasto'},
    {id: 7, titulo: 'Retiro Bitcoin', razon: 'Bitcoin', cantidad: 2500, pagado: true, tipo: 'ingreso'},
    {id: 8, titulo: 'Pago alquiler', razon: 'Casa', cantidad: 800, pagado: true, tipo: 'gasto'},
  ];

  capitalInicial: number = 0;

  constructor() {
    addIcons({ settingsOutline });
  }

  get totalIngresos(): number {
    return this.listaDeMovimientos
      .filter(m => m.tipo === 'ingreso')
      .reduce((total, m) => total + m.cantidad, 0);
  }

  get totalGastos(): number {
    return this.listaDeMovimientos
      .filter(m => m.tipo === 'gasto')
      .reduce((total, m) => total + m.cantidad, 0);
  }

  get saldoDisponible(): number {
    return this.totalIngresos - this.totalGastos;
  }

  obtenerImagen(razon: string): string {

    switch (razon.toLowerCase()) {

      case 'bitcoin':
        return 'assets/img/bitcoin.png';

      case 'bizum':
        return 'assets/img/bizum.png';

      case 'coche':
        return 'assets/img/coche.png';

      case 'comida':
        return 'assets/img/comida.png';

      case 'casa':
        return 'assets/img/casa.png';

      case 'tecnologia':
        return 'assets/img/tecnologia.png';

      case 'trabajo':
        return 'assets/img/trabajo.png';

      case 'ocio':
        return 'assets/img/ocio.png';

      default:
        return 'assets/img/home.png';
    }
  }

}