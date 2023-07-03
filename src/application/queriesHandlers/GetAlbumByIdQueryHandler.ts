import { REPOSITORY_IDENTIFIER } from '@/infrastructure/constants/identifiers';
import { IQueryHandler } from '@/application/queriesHandlers/IQueryHandler';
import { IRepository } from '@/infrastructure/repositories/IRepository';
import { inject, injectable } from 'inversify';
import { Album } from '@/domain/entities';
import { GetAlbumByIdQuery } from '@/application/queries/GetAlbumByIdQuery';

@injectable()
export class GetAlbumByIdQueryHandler implements IQueryHandler<Album>{

  private SpotifyRepository: IRepository;
  constructor(@inject(REPOSITORY_IDENTIFIER.REPOSITORY) spotifyRepository: IRepository) {
    this.SpotifyRepository = spotifyRepository;
  }
  
  handleAsync(query: GetAlbumByIdQuery): Promise<Album> {
    return this.SpotifyRepository.GetAlbumById(query);
  }
    
}