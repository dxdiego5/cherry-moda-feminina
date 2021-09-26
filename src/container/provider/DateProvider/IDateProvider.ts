interface IDateProvider {
  compareInHours(start_date: Date, end: Date): Number;
  convertToUTC(date: Date): string;
  dateIsValid(date: Date): boolean;
  dateNow();
  addDays(days: number): Date;
  addHours(hours: number): Date;
  compareIfBefore(start_date: Date, end_date: Date): boolean;

}

export { IDateProvider };
