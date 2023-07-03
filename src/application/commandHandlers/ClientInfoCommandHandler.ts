import { REPOSITORY_IDENTIFIER } from '@/infrastructure/constants/identifiers';
import { ICommandHandler } from '@/application/commandHandlers/ICommandHandler';
import { IRepository } from '@/infrastructure/repositories/IRepository';
import { inject, injectable } from 'inversify';
import { ClientInfoCommand } from '../commands/ClientInfoCommand';
import { AuthInfo } from '@/domain/entities';

@injectable()
export class ClientInfoCommandHandler implements ICommandHandler<AuthInfo>{

    private SpotifyRepository: IRepository;
    constructor(@inject(REPOSITORY_IDENTIFIER.REPOSITORY) spotifyRepository: IRepository ) {
        this.SpotifyRepository = spotifyRepository;
    }
    
    handleAsync(command: ClientInfoCommand): Promise<AuthInfo> {
        return this.SpotifyRepository.GetAuthToken(command.authToken);
    }

}