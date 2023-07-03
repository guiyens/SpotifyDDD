import { REPOSITORY_IDENTIFIER } from '@/infrastructure/constants/identifiers';
import { IQueryHandler } from '@/application/queriesHandlers/IQueryHandler';
import { IRepository } from '@/infrastructure/repositories/IRepository';
import { inject, injectable } from 'inversify';
import { SearchInfoQuery } from '@/application/queries/SearchInfoQuery';
import { SearchResult } from '@/domain/entities/SearchResult';

@injectable()
export class SearchInfoQueryHandler implements IQueryHandler<SearchResult>{

  private SpotifyRepository: IRepository;
  constructor(@inject(REPOSITORY_IDENTIFIER.REPOSITORY) spotifyRepository: IRepository) {
    this.SpotifyRepository = spotifyRepository;
  }
  
  handleAsync(query: SearchInfoQuery): Promise<SearchResult> {
    return this.SpotifyRepository.SearchAll(query);
  }
    
}