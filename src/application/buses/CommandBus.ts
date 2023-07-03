import { injectable } from 'inversify';
import { ICommandBus } from '@/application/buses/ICommandBus';
import { ICommand } from '@/application/commands/ICommand';
import container from '@/infrastructure/config/ioc_config';
import { ICommandHandler } from '@/application/commandHandlers/ICommandHandler';

@injectable()
export class CommandBus implements ICommandBus {
    public async sendAsync<TResult>(command: ICommand): Promise<TResult> {
        const comandHandler = container.get<ICommandHandler<TResult>>(Symbol.for(command.constructor.name + "Handler"));
        return await comandHandler.handleAsync(command);
    }
}