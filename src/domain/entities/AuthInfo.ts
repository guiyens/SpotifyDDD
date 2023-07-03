export class AuthInfo {
    private _accessToken: string;
    private _tokenType: string;
    private _expiresIn: number;
    private _expirationDate : number;
    
    public constructor(data: any) {
        this._accessToken = data.access_token;  
        this._tokenType = data.token_type;  
        this._expiresIn = data.expires_in;  
        this._expirationDate = (new Date()).getMilliseconds() + data.expires_in;
    }

    public isValidToken(): boolean { 
        const now = new Date();
        return now.getMilliseconds() < this._expirationDate;
    }

    public get accessToken(): string {
        return this._accessToken;
    }
      
    public set accessToken(value: string) {
        this._accessToken = value;
    }

    public get tokenType(): string {
        return this._tokenType;
    }
      
    public set tokenType(value: string) {
        this._tokenType = value;
    }
    
    public get expiresIn(): number {
        return this._expiresIn;
    }
      
    public set expiresIn(value: number) {
        this._expiresIn = value;
    }

    public get expirationDate() : number {
        return this._expirationDate;
    }
}