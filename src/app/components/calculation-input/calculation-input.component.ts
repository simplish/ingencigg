import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculationData } from '../../model/calculation-data';
import { MdDatepickerInputEvent, MdSliderChange } from '@angular/material';

@Component({
  selector: 'cigg-calculation-input',
  templateUrl: './calculation-input.component.html',
  styleUrls: ['./calculation-input.component.scss']
})
export class CalculationInputComponent implements OnInit {

  private calculationData = new CalculationData();
  @Output() onData = new EventEmitter<CalculationData>();
  constructor() { }

  ngOnInit() {
  }

  onInput(data: MdDatepickerInputEvent<Date>): void {
    console.log('input', data, typeof data);
    this.calculationData.noSmokingSince = data.value;
    this.emitData();
  }

  onCiggCountChange(event: MdSliderChange) {
    this.calculationData.numberOfCigarettes = event.value;
    this.emitData();
  }

  emitData() {
    this.onData.emit(this.calculationData);
  }
}
