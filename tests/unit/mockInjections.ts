import { Container, ContainerModule } from "inversify";
import { ICommandBus } from '@/application/buses/ICommandBus';
import { CommandBus } from '@/application/buses/CommandBus';
import { IQueryBus } from '@/application/buses/IQueryBus';
import { QueryBus } from '@/application/buses/QueryBus';
import { QUERY_IDENTIFIER, COMMAND_IDENTIFIER, SERVICE_IDENTIFIER } from '@/infrastructure/constants/identifiers';
import { IAuthService } from "@/infrastructure/services/IAuthService";
import AuthService from "@/infrastructure/services/AuthService";

const container = new Container();

const commandBus = new ContainerModule((bind) => {
    bind<ICommandBus>(COMMAND_IDENTIFIER.COMMAND_BUS).to(CommandBus);
});

const queryBus = new ContainerModule((bind) => {
    bind<IQueryBus>(QUERY_IDENTIFIER.QUERY_BUS).to(QueryBus);
});

const authService = new ContainerModule((bind) => {
    bind<IAuthService>(SERVICE_IDENTIFIER.AUTH_SERVICE).to(AuthService);
});

export { commandBus, queryBus, authService };