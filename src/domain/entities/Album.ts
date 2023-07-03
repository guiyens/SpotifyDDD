import { Music, Track } from "@/domain/entities";

export class Album extends Music { 
  private _tracks: Array<Track>;
  private _year: number;
  private _url : string | undefined;

  constructor(image: string, name: string, id: string, date: string, tracks?: Array<Track>) {
    super(image, name, id);
    this._tracks = tracks ? tracks : new Array<Track>();
    this._year = this.getYearFromStringDate(date);
    this._url = '/AlbumDetail/' + this.id;
  }

  public get year(): number {
    return this._year;
  }

  public get tracks(): Array<Track> {
    return this._tracks;
  }
    
  public set tracks(value: Array<Track>) {
      this._tracks = value;
  }

  public getYearFromStringDate(year: string): number {
    const stringToDate = new Date(year);
    return stringToDate.getFullYear()
  }

  public get url() : string | undefined {
      return this._url;
  }
  public set url(v : string | undefined) {
      this._url = v;
  }

}