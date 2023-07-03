import { SearchInfoQuery } from '@/application/queries/SearchInfoQuery';
import { GetAlbumByIdQuery } from '@/application/queries/GetAlbumByIdQuery';
import { AuthInfo, SearchResult, Album, Artist } from '@/domain/entities';
import { GetArtistByIdQuery } from '@/application/queries/GetArtistByIdQuery';

export interface IRepository {
    SearchAll(searchInfoQuery: SearchInfoQuery): Promise<SearchResult>;
    GetAuthToken(authOptions: string): Promise<AuthInfo>;
    GetAlbumById(albumIdQuery: GetAlbumByIdQuery): Promise<Album>;
    GetArtistById(artistIdQuery: GetArtistByIdQuery): Promise<Artist>
}
