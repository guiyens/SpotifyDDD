import { IQuery } from './../queries/IQuery';

export interface IQueryHandler<TResult>{
    handleAsync(query: IQuery): Promise<TResult>;
}
