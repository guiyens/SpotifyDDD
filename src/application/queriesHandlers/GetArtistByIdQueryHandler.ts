import { REPOSITORY_IDENTIFIER } from '@/infrastructure/constants/identifiers';
import { IQueryHandler } from '@/application/queriesHandlers/IQueryHandler';
import { IRepository } from '@/infrastructure/repositories/IRepository';
import { inject, injectable } from 'inversify';
import { Artist } from '@/domain/entities';
import { GetArtistByIdQuery } from '@/application/queries/GetArtistByIdQuery';

@injectable()
export class GetArtistByIdQueryHandler implements IQueryHandler<Artist>{

  private SpotifyRepository: IRepository;
  constructor(@inject(REPOSITORY_IDENTIFIER.REPOSITORY) spotifyRepository: IRepository) {
    this.SpotifyRepository = spotifyRepository;
  }
  
  handleAsync(query: GetArtistByIdQuery): Promise<Artist> {
    return this.SpotifyRepository.GetArtistById(query);
  }
    
}