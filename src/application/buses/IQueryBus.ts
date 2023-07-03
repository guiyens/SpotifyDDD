import { IQuery } from '../queries/IQuery';

export interface IQueryBus{
    sendAsync<TResult>(query: IQuery): Promise<TResult>;
}
