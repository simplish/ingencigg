import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CalculationData } from '../model/calculation-data';

@Injectable()
export class CalculationService {
  private calculationDataSource = new BehaviorSubject<CalculationData>(CalculationData.default());
  public calculationData$ = this.calculationDataSource.asObservable();

  constructor() { }

  push(calculationData: CalculationData): void {
    // do calculation
    // set next on source
  }

}
