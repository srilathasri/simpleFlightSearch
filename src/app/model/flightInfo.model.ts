export interface FlightInfo {
  carrier: string;
  trips:
  [{
    fr: string;
    to: string;
    dep: string;
    code: string;
    arr: string;
    fare: string;
    cur: string;
    ret: {
      code: string;
      dep: string;
      arr: string;
      cur: string;
    }
  }]
}
