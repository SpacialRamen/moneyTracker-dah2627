import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cashOutline, chevronBack, chevronForward, addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  styleUrls: ['app.component.scss'],
  standalone: true,
})
export class AppComponent {
  constructor() {
    addIcons({
      cashOutline,
      chevronBack,
      chevronForward,
      addCircleOutline
    });
  }
}
