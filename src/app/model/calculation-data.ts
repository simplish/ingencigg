import * as moment from 'moment';

export class CalculationData {
  public noSmokingSince: Date;
  public numberOfCigarettes: number;
  private dateFormat = 'YYYY-MM-DD';
  public readonly packageSize = 20;
  public readonly packagePrize = 57;
  public readonly priceUnit = 'Kronor';
  public numberOfDays: number;
  public moneySaved: number;
  public backgroundColor = '#00ff00'; // default

  get noSmokingSinceFormatted() {
    const momentDate = moment(this.noSmokingSince);
    return momentDate.format(this.dateFormat);
  }

  static default() {
    return new CalculationData();
  }
}
