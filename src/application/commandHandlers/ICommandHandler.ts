import { ICommand } from '@/application/commands/ICommand';

export interface ICommandHandler<TResult> {
    handleAsync(command: ICommand): Promise<TResult>;
}
