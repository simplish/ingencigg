import * as moment from 'moment';

export class CalculationData {
  public noSmokingSince: Date;
  public numberOfCigarettes: number;
  private dateFormat = 'YYYY-MM-DD';
  private packageSize = 20;
  private packagePrize = 57;
  private priceUnit = 'Kronor';

  get noSmokingSinceFormatted() {
    const momentDate = moment(this.noSmokingSince);
    return momentDate.format(this.dateFormat);
  }

  get calculatedData() {
    let numberOfDays = null;
    if (this.noSmokingSince) {
      numberOfDays = moment().diff(this.noSmokingSince, 'days');
    }
    let moneySaved = 0;
    if (numberOfDays > 0 && this.numberOfCigarettes) {
      moneySaved = numberOfDays * this.numberOfCigarettes * (this.packagePrize / this.packageSize);
    }
    return {
      numberOfDays,
      moneySaved
    };
  }
}
