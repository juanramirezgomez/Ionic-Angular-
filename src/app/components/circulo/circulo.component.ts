import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class CirculoComponent {
  radio: number | null = null;
  resultado: number | null = null;

  calcularPerimetro() {
    if (this.radio !== null) {
      this.resultado = 2 * Math.PI * this.radio;
    }
  }
}
