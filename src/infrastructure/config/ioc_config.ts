 import { Container } from "inversify";
 import "reflect-metadata";

import { ICommandHandler } from '@/application/commandHandlers/ICommandHandler';
import { CommandBus } from '@/application/buses/CommandBus';
import { ICommandBus } from '@/application/buses/ICommandBus';
import { REPOSITORY_IDENTIFIER, COMMAND_IDENTIFIER, QUERY_IDENTIFIER, SERVICE_IDENTIFIER } from '@/infrastructure/constants/identifiers';

import { SpotifyRepository } from '@/infrastructure/repositories/SpotifyRepository';
import { IRepository } from '@/infrastructure/repositories/IRepository';

import { IQueryBus } from '@/application/buses/IQueryBus';
import { QueryBus } from '@/application/buses/QueryBus';
import { IQueryHandler } from '@/application/queriesHandlers/IQueryHandler';
import { ClientInfoCommandHandler } from '@/application/commandHandlers/ClientInfoCommandHandler';
import { Album, Artist, AuthInfo, SearchResult } from "@/domain/entities";
import { SearchInfoQueryHandler } from "@/application/queriesHandlers/SearchInfoQueryHandler";
import { GetAlbumByIdQueryHandler } from "@/application/queriesHandlers/GetAlbumByIdQueryHandler";
import { GetArtistByIdQueryHandler } from "@/application/queriesHandlers/GetArtistByIdQueryHandler";
import AuthService from "@/infrastructure/services/AuthService";
import { IAuthService } from "@/infrastructure/services/IAuthService";


 const container = new Container();

// buses
container.bind<ICommandBus>(COMMAND_IDENTIFIER.COMMAND_BUS).to(CommandBus);
container.bind<IQueryBus>(QUERY_IDENTIFIER.QUERY_BUS).to(QueryBus);
// buses

// Repositories
container.bind<IRepository>(REPOSITORY_IDENTIFIER.REPOSITORY).to(SpotifyRepository);
// Repositories

// commands
container.bind<ICommandHandler<AuthInfo>>(COMMAND_IDENTIFIER.CLIENT_INFO).to(ClientInfoCommandHandler);
// commands

// queries
container.bind<IQueryHandler<SearchResult>>(QUERY_IDENTIFIER.SEARCH_INFO).to(SearchInfoQueryHandler);
container.bind<IQueryHandler<Album>>(QUERY_IDENTIFIER.GET_ALBUM).to(GetAlbumByIdQueryHandler);
container.bind<IQueryHandler<Artist>>(QUERY_IDENTIFIER.GET_ARTIST).to(GetArtistByIdQueryHandler);
// queries

// Services
container.bind<IAuthService>(SERVICE_IDENTIFIER.AUTH_SERVICE).to(AuthService);
// Services


 export default container;


