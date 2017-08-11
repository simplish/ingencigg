import { Component } from '@angular/core';
import { CalculationData } from './model/calculation-data';

@Component({
  selector: 'cigg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cigg';

  private data = new CalculationData();

  onData (data: CalculationData): void {
    console.log(JSON.stringify(data));
    this.data = data;
  }
}
