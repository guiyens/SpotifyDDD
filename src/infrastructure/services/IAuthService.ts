
export interface IAuthService {
  requestAuthInfo(): Promise<void>;
  manageToken(): Promise<void>;
}