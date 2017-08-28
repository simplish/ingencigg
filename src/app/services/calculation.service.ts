import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CalculationData } from '../model/calculation-data';
import * as moment from 'moment';
import * as chroma from 'chroma-js';

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

    const scale = chroma
      .scale([chroma.hsl(5, 1, 0.6), chroma.hsl(60, 1, 0.6), chroma.hsl(121, 1, 0.43)])
      .domain([0, 365]);
    calculationData.backgroundColor = scale(calculationData.numberOfDays).hex();
  }
}
