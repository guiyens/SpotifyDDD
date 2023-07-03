export abstract class Music {
    private _id: string;
    private _image: string;
    private _name: string;    

    public constructor(image: string, name: string, id: string) {
        this._image = image;  
        this._name = name;  
        this._id =  id;
    }

    public get id(): string {
        return this._id;
    }
      
    public set id(value: string) {
        this._id = value;
    }

    public get image(): string {
        return this._image;
    }
      
    public set image(value: string) {
        this._image = value;
    }

    public get name(): string {
        return this._name;
    }
      
    public set name(value: string) {
        this._name = value;
    }
}