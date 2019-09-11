import { Conductor } from './Conductor';
import { Vehiculo } from './Vehiculo';

export class Servicio {
  idServicio: number;
  distanciaKm: number;
  direccionInicial: string;
  direccionFinal: string;
  municipioFinal: string;
  totalServicio: number;
  conductor: Conductor;
  vehiculo: Vehiculo;
}
