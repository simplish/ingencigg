import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculationData } from '../../model/calculation-data';
import { MdDatepickerInputEvent, MdSliderChange } from '@angular/material';
import { CalculationService } from '../../services/calculation.service';

@Component({
  selector: 'cigg-calculation-input',
  templateUrl: './calculation-input.component.html',
  styleUrls: ['./calculation-input.component.scss']
})
export class CalculationInputComponent implements OnInit {

  private maxDate = new Date();
  private calculationData = new CalculationData();
  constructor(private calculationService: CalculationService) { }

  ngOnInit() {
  }

  onInput(data: MdDatepickerInputEvent<Date>): void {
    console.log('input', data, typeof data);
    this.calculationData.noSmokingSince = data.value;
    this.emitData(this.calculationData);
  }

  onCiggCountChange(event: MdSliderChange): void {
    this.calculationData.numberOfCigarettes = event.value;
    this.emitData(this.calculationData);
  }

  emitData(calculationData: CalculationData): void {
    console.log("put on service");
    this.calculationService.push(calculationData);
  }
}
