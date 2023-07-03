import { Music, Album } from "@/domain/entities";

export class Artist extends Music { 
  private _albums: Array<Album>;
  private _genres: Array<string>;
  private _url : string | undefined;

  constructor(image: string, name: string, id: string, albums?: Array<Album>, genres?: Array<string>) {
    super(image, name, id);

    this._albums = albums ? albums : new Array<Album>();
    this._genres = genres ? genres : new Array<string>();
    this._url = "/ArtistDetail/" + this.id;
  }

  public get albums(): Array<Album> {
    return this._albums;
  }
    
  public set albums(value: Array<Album>) {
      this._albums = value;
  }

  public get genres(): Array<string> {
    return this._genres;
  }
    
  public set genres(value: Array<string>) {
      this._genres = value;
  }

  public get url() : string | undefined {
    return this._url;
  }
  public set url(v : string | undefined) {
      this._url = v;
  }
}