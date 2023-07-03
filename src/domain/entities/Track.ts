import { Music } from "./Music";

export class Track extends Music {
  private _duration: string;

  private _trackUrl: string;

  constructor(
    image: string,
    name: string,
    id: string,
    durationMilliseconds: number,
    trackUrl: string
  ) {
    super(image, name, id);

    this._duration = this.formatDuration(durationMilliseconds);
    this._trackUrl = trackUrl;
  }

  public get duration(): string {
    return this._duration;
  }

  public get trackUrl(): string {
    return this._trackUrl;
  }
  public set trackUrl(v: string) {
    this._trackUrl = v;
  }

  public formatDuration(durationMilliseconds: number): string {
    const hasOneChars =
      Math.floor((durationMilliseconds / 1000) % 60).toString().length === 1;
    const min = Math.floor((durationMilliseconds / 1000 / 60) << 0);
    const sec = hasOneChars
      ? `0${Math.floor((durationMilliseconds / 1000) % 60)}`
      : Math.floor((durationMilliseconds / 1000) % 60);
    return `${min}:${sec}`;
  }
}
