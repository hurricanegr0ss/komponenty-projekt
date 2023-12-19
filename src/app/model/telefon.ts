export class Telefon {
  private _id: number = 0;
  private _producent: string;
  private _model: string;
  private _rok_produkcji: number;
  private _imei: string;
  private _system: string;
  private _cale_ekranu: number;
  private _ram: number;

  constructor(
    _id: number,
    _producent: string,
    _model: string,
    _rok_produkcji: number,
    _imei: string,
    _system: string,
    _cale_ekranu: number,
    _ram: number
  ) {
    this._id = _id;
    this._producent = _producent;
    this._model = _model;
    this._rok_produkcji = _rok_produkcji;
    this._imei = _imei;
    this._system = _system;
    this._cale_ekranu = _cale_ekranu;
    this._ram = _ram;
  }

  // Gettery

  public get id(): number {
    return this._id;
  }

  public get producent(): string {
    return this._producent;
  }

  public get model(): string {
    return this._model;
  }

  public get rok_produkcji(): number {
    return this._rok_produkcji;
  }

  public get imei(): string {
    return this._imei;
  }

  public get system(): string {
    return this._system;
  }

  public get cale_ekranu(): number {
    return this._cale_ekranu;
  }

  public get ram(): number {
    return this._ram;
  }

  // Settery

  public set id(_id: number) {
    this._id = _id;
  }

  public set producent(_producent: string) {
    this._producent = _producent;
  }

  public set model(_model: string) {
    this._model = _model;
  }

  public set rok_produkcji(_rok_produkcji: number) {
    this._rok_produkcji = _rok_produkcji;
  }

  public set imei(_imei: string) {
    this._imei = _imei;
  }

  public set system(_system: string) {
    this._system = _system;
  }

  public set cale_ekranu(_cale_ekranu: number) {
    this._cale_ekranu = _cale_ekranu;
  }

  public set ram(_ram: number) {
    this._ram = _ram;
  }
}
