import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../../services/calculation.service';

@Component({
  selector: 'cigg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private calculationService: CalculationService) { }

  ngOnInit() {
  }

}
