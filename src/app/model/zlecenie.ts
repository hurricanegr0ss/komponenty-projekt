export class Zlecenie {
  private _id: number = 0;
  private _zlecenie_name: string;
  private _zlecenie_imei: string;
  private _zlecenie_data_oddania: Date;
  private _zlecenie_stan_zlecenia: string;
  private _zlecenie_czy_oplacone: boolean;

  public constructor(
    _id: number,
    _zlecenie_name: string,
    _zlecenie_imei: string,
    _zlecenie_data_oddania: Date,
    _zlecenie_stan_zlecenia: string,
    _zlecenie_czy_oplacone: boolean
    ) {
    this._id = _id;
    this._zlecenie_name = _zlecenie_name;
    this._zlecenie_imei = _zlecenie_imei;
    this._zlecenie_data_oddania = _zlecenie_data_oddania;
    this._zlecenie_stan_zlecenia = _zlecenie_stan_zlecenia;
    this._zlecenie_czy_oplacone = _zlecenie_czy_oplacone;
  }

  //Gettery

  public get id(): number{
    return this._id;
  }

  public get zlecenie_name(): string{
    return this._zlecenie_name;
  }

  public get zlecenie_imei(): string{
    return this._zlecenie_imei;
  }

  public get zlecenie_data_oddania(): Date{
    return this._zlecenie_data_oddania;
  }

  public get zlecenie_stan_zlecenia(): string{
    return this._zlecenie_stan_zlecenia;
  }

  public get zlecenie_czy_oplacone(): boolean{
    return this._zlecenie_czy_oplacone;
  }

  //Settery

  public set id(_id: number){
    this._id = _id;
  }

  public set zlecenie_name(_zlecenie_name: string){
    this._zlecenie_name = _zlecenie_name;
  }

  public set zlecenie_imei(_zlecenie_imei: string){
    this._zlecenie_imei = _zlecenie_imei;
  }

  public set zlecenie_data_oddania(_zlecenie_data_oddania: Date){
    this._zlecenie_data_oddania = _zlecenie_data_oddania;
  }

  public set zlecenie_stan_zlecenia(_zlecenie_stan_zlecenia: string){
    this._zlecenie_stan_zlecenia = _zlecenie_stan_zlecenia;
  }

  public set zlecenie_czy_oplacone(_zlecenie_czy_oplacone: boolean){
    this._zlecenie_czy_oplacone = _zlecenie_czy_oplacone;
  }

};
