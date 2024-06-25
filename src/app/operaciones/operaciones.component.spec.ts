import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperacionesComponent } from './operaciones.component';

describe('OperacionesComponent', () => {
  let component: OperacionesComponent;
  let fixture: ComponentFixture<OperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert Celsius to Fahrenheit', () => {
    component.gradosCentigrados = 0;
    component.convertirCentigradosAFahrenheit();
    expect(component.resultado).toBe(32);
  });

  it('should convert Celsius to Kelvin', () => {
    component.gradosCentigrados = 0;
    component.convertirCentigradosAKelvin();
    expect(component.resultado).toBe(273.15);
  });

  it('should convert Fahrenheit to Celsius', () => {
    component.gradosFahrenheit = 32;
    component.convertirFahrenheitACentigrados();
    expect(component.resultado).toBeCloseTo(0, 1);
  });

  it('should convert Fahrenheit to Kelvin', () => {
    component.gradosFahrenheit = 32;
    component.convertirFahrenheitAKelvin();
    expect(component.resultado).toBeCloseTo(273.15, 1);
  });

  it('should convert Kelvin to Celsius', () => {
    component.gradosKelvin = 273.15;
    component.convertirKelvinACentigrados();
    expect(component.resultado).toBeCloseTo(0, 1);
  });

  it('should convert Kelvin to Fahrenheit', () => {
    component.gradosKelvin = 273.15;
    component.convertirKelvinAFahrenheit();
    expect(component.resultado).toBeCloseTo(32, 1);
  });
});
