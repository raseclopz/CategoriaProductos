import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {
  titulo: string = 'Conversión de Temperaturas';
  resultado: number = 0;
  gradosCentigrados: number = 0;
  gradosFahrenheit: number = 0;
  gradosKelvin: number = 0;

  convertirCentigradosAFahrenheit(): void {
    this.resultado = (this.gradosCentigrados * 9 / 5) + 32;
  }

  convertirCentigradosAKelvin(): void {
    this.resultado = this.gradosCentigrados + 273.15;
  }

  convertirFahrenheitACentigrados(): void {
    this.resultado = (this.gradosFahrenheit - 32) * 5 / 9;
  }

  convertirFahrenheitAKelvin(): void {
    this.resultado = ((this.gradosFahrenheit - 32) * 5 / 9) + 273.15;
  }

  convertirKelvinACentigrados(): void {
    this.resultado = this.gradosKelvin - 273.15;
  }

  convertirKelvinAFahrenheit(): void {
    this.resultado = ((this.gradosKelvin - 273.15) * 9 / 5) + 32;
  }
}
