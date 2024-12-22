import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class TrianguloComponent {
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;
  resultado: number | null = null;

  calcularPerimetro() {
    if (this.ladoA !== null && this.ladoB !== null && this.ladoC !== null) {
      this.resultado = this.ladoA + this.ladoB + this.ladoC;
    }
  }
}