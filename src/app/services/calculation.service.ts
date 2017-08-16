import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CalculationData } from '../model/calculation-data';
import * as moment from 'moment';

@Injectable()
export class CalculationService {
  private calculationDataSource = new BehaviorSubject<CalculationData>(CalculationData.default());
  public calculationData$ = this.calculationDataSource.asObservable();

  constructor() { }

  push(calculationData: CalculationData): void {
    console.log("push data is", calculationData);
    this.calculate(calculationData);
    this.calculationDataSource.next(calculationData);
  }

  calculate(calculationData: CalculationData) {
    calculationData.numberOfDays = 0;
    if (calculationData.noSmokingSince) {
      calculationData.numberOfDays = moment().diff(calculationData.noSmokingSince, 'days');
    }
    calculationData.moneySaved = 0;
    if (calculationData.numberOfDays > 0 && calculationData.numberOfCigarettes) {
      calculationData.moneySaved = Math.floor(calculationData.numberOfDays * calculationData.numberOfCigarettes * (calculationData.packagePrize / calculationData.packageSize));
    }
  }
}
