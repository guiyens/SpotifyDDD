import { IQuery } from './IQuery';


export class GetAlbumByIdQuery implements IQuery {
    private _accessToken: string;
    private _id: string;

    constructor(accessToken: string, id: string) {
        this._accessToken = accessToken;
        this._id = id;
    }

    public get accessToken(): string {
        return this._accessToken;
    }
      
    public set accessToken(value: string) {
        this._accessToken = value;
    }

    public get id(): string {
        return this._id;
    }
      
    public set id(value: string) {
        this._id = value;
    }
}