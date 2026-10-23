import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonCheckbox, IonButton, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular';
import { Movimientos } from '../interfaces/movimientos';
import { MovimientoNuevoComponent } from '../components/movimiento-nuevo/movimiento-nuevo.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonCheckbox, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardContent, MovimientoNuevoComponent, CommonModule]
})

export class HomePage {

  listaDeMovimientos: Movimientos[] = [
    { id: 1, titulo: "Hacer la compra mercadona", razon: "Compra diaria", cantidad: 50, pagado: true, tipo: "gasto" },
    { id: 2, titulo: "Suscripcion Netflix", razon: "Ocio", cantidad: 20, pagado: false, tipo: "gasto" },
    { id: 3, titulo: "Nothing Phone 4a", razon: "Tecnología", cantidad: 250, pagado: false, tipo: "gasto" },
    {id: 4, titulo: "Nómina", razon: "Trabajo", cantidad: 1500, pagado: true, tipo: "ingreso"}
  ];

  capitalInicial: number = 0;

  constructor() { }

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

}