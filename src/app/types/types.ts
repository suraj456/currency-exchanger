// currency: Albania Lek,
// abbreviation: ALL,
// symbol: &#76;&#101;&#107;
export interface ICurrency{
  abbreviation?: string;
  currency?: string;
  symbol?: string;
  value?: any;
}

export interface IFilterInput{
    from? : string;
    to? : string;
    amount? : string;
}

export interface ITimeSeries{
  success: boolean,
  timeseries: boolean,
  start_date: string,
  end_date: string,
  base: string,
  rates: {
    [key : string] : {
      [key : string] : number
    }
  }
}

export interface IConvertCurrency{
    query: {
        from: string,
        to: string,
        amount: number
    },
    info: {
        timestamp: number,
        rate: number
    },
    date: string,
    result: number
}
