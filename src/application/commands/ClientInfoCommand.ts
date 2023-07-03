import { ICommand } from '@/application/commands/ICommand';

export class ClientInfoCommand implements ICommand{

    private _clientId: string;
    private _clientSecret: string;
    private _authToken: string;

    constructor() {
        //Todo (hide)
        this._clientId = "c6727bf8733a4c1f81c7f0b919fe5b01";
        this._clientSecret = "f26c69b30bf24369a203a40e50b0f722";
        this._authToken = btoa(this._clientId + ':' + this._clientSecret);
    }

    public get authToken(): string {
        return this._authToken;
    }

}
