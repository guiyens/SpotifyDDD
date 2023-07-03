import { IQuery } from './IQuery';


export class SearchInfoQuery implements IQuery {
    private _accessToken: string;
    private _searchText: string;

    constructor(accessToken: string, searchText: string) {
        this._accessToken = accessToken;
        this._searchText = searchText;
    }

    public get accessToken(): string {
        return this._accessToken;
    }
      
    public set accessToken(value: string) {
        this._accessToken = value;
    }

    public get searchText(): string {
        return this._searchText;
    }
      
    public set searchText(value: string) {
        this._searchText = value;
    }

    public isValid(): boolean { 
        return this._searchText !== "";
    }
}