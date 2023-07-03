import { IQueryHandler } from '@/application/queriesHandlers/IQueryHandler';
import { IQuery } from '@/application/queries/IQuery';
import { IQueryBus } from '@/application/buses/IQueryBus';
import { injectable } from 'inversify';
import container from '@/infrastructure/config/ioc_config';
@injectable()
export class QueryBus implements IQueryBus {
    public async sendAsync<TResult>(query: IQuery): Promise<TResult> {
        const queryHandler = container.get<IQueryHandler<TResult>>(Symbol.for(query.constructor.name + "Handler"));
        return await queryHandler.handleAsync(query);
    }
}