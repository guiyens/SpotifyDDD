import { IRepository } from './IRepository';
import { injectable } from 'inversify';
import axios from 'axios';
import { Album, Artist, AuthInfo, Track } from '@/domain/entities';
import { SearchInfoQuery } from '@/application/queries/SearchInfoQuery';
import { GetAlbumByIdQuery } from '@/application/queries/GetAlbumByIdQuery';
import { SearchResult } from '@/domain/entities/SearchResult';
import { GetArtistByIdQuery } from '@/application/queries/GetArtistByIdQuery';

const baseURL = 'https://api.spotify.com/v1/';
const mediumImage =1;

@injectable()
export class SpotifyRepository implements IRepository {

  SearchAll(searchInfoQuery: SearchInfoQuery): Promise<SearchResult> {
    const headers = { headers: { 'Authorization': `Bearer ${searchInfoQuery.accessToken}` } };
    
    return new Promise((resolve, reject) => {
      axios.get(`${baseURL}search?q=${searchInfoQuery.searchText}&type=track%2Calbum%2Cartist`, headers)
        .then(response => {
          const albums = response.data.albums.items.map((item: any) => new Album(item.images[mediumImage], item.name, item.id, item.release_date))
          const artists = response.data.artists.items.map((item: any) => new Artist(item.images[mediumImage], item.name, item.id))
          const tracks = response.data.tracks.items.map( (item: any) => new Track(item.album.images[mediumImage], item.name, item.id, item.duration_ms, item.preview_url))
          resolve(new SearchResult(albums, artists, tracks));
        })
        .catch(error => reject(error))
    })
  }

  GetAlbumById(albumIdQuery: GetAlbumByIdQuery): Promise<Album> {
    const headers = { headers: { 'Authorization': `Bearer ${albumIdQuery.accessToken}` } };
    
    return new Promise((resolve, reject) => {
      axios.get(`${baseURL}albums/${albumIdQuery.id}`, headers)
        .then(response => {
          response.data.tracks.items = response.data.tracks.items.map((item: any) => new Track(response.data.images[mediumImage], item.name, item.id, item.duration_ms, item.preview_url))
          resolve(new Album(response.data.images[mediumImage], response.data.name, response.data.id, response.data.release_date, response.data.tracks.items));
        })
        .catch(error => reject(error))
    })
  }

  GetArtistById(artistIdQuery: GetArtistByIdQuery): Promise<Artist> {
    const headers = { headers: { 'Authorization': `Bearer ${artistIdQuery.accessToken}` } };
    
    return new Promise((resolve, reject) => {
      const artistUrl = `${baseURL}artists/${artistIdQuery.id}`;
      const artistAlbumsUrl = `${baseURL}artists/${artistIdQuery.id}/albums`;

      const promiseArtist = axios.get(artistUrl,headers);
      const promiseArtistAlbums = axios.get(artistAlbumsUrl,headers);

      Promise.all([promiseArtist, promiseArtistAlbums]).then(response => {
        response[1].data.items = response[1].data.items.map((item: any) => new Album(item.images[mediumImage], item.name, item.id, item.release_date))
        const artistToresolve = new Artist(response[0].data.images[mediumImage], response[0].data.name, response[0].data.id, response[1].data.items, response[0].data.genres);
        resolve(artistToresolve);
      });
    })
  }
  
  GetAuthToken(authToken: string): Promise<AuthInfo> {
    const data = 'grant_type=client_credentials';
    const headers = { headers: { 'Authorization': `Basic ${authToken}`, 'Content-Type': 'application/x-www-form-urlencoded'}}
    
    return new Promise((resolve, reject) => {
      axios.post("https://accounts.spotify.com/api/token", data, headers)
        .then(response => {
          const authInfo: AuthInfo = new AuthInfo(response.data)
          resolve(authInfo);
      })
      .catch(error => reject(error))
    })
  }


}
