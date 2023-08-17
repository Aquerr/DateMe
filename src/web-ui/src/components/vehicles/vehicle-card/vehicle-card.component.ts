import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EngineType, VehicleBasicData } from '../../../models/vehicle.model';

@Component({
  selector: 'vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent {
  @Input() vehicle: VehicleBasicData | null = null;
  @Input() lang = 'us';
  @Input() userId: number | undefined;
  @Output() reserveVehicleEvent = new EventEmitter<number>;

  constructor() {}

  reserveVehicle(vehicle: VehicleBasicData) {
    this.reserveVehicleEvent.emit(vehicle.id);
  }

  calculateCurrency(price: number) {
    //TODO pobieranie wartości walutowych na dany dzień, a może job na backend i raz dziennie odpalać quartz i rekalkulować cene w zależności od waluty?
    if (this.lang === 'en') {
      return (price / 4).toFixed(2);
    }
    return price;
  }

  protected readonly EngineType = EngineType;
}
