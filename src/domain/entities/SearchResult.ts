import { Album, Artist, Track } from "@/domain/entities";


export class SearchResult {
  private _albums: Array<Album>;
  private _artists: Array<Artist>;
  private _tracks: Array<Track>;

  public constructor(albums: Array<Album>, artists: Array<Artist>, tracks: Array<Track>) {
    this._albums = albums;  
    this._artists = artists;
    this._tracks = tracks; 
  }

  public get albums(): Array<Album> {
    return this._albums;
  }
    
  public set albums(value: Array<Album>) {
    this._albums = value;
  }

  public get artists(): Array<Artist> {
    return this._artists;
  }
    
  public set artists(value:  Array<Artist>) {
    this._artists = value;
  }

  public get tracks(): Array<Track> {
    return this._tracks;
  }
    
  public set tracks(value: Array<Track>) {
      this._tracks = value;
  }
}