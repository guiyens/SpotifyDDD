import { ICommand } from '@/application/commands/ICommand';


export interface ICommandBus {
    sendAsync(command: ICommand): Promise<any>;
}
