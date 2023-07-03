import { ICommandBus } from "@/application/buses/ICommandBus";
import { ClientInfoCommand } from "@/application/commands/ClientInfoCommand";
import { COMMAND_IDENTIFIER } from '@/infrastructure/constants/identifiers';
import { inject, injectable } from 'inversify';
import { IAuthService } from "./IAuthService";
import store from "@/infrastructure/store";

@injectable()
export default class AuthService implements IAuthService { 

  private commandBus: ICommandBus;

  constructor(@inject(COMMAND_IDENTIFIER.COMMAND_BUS) commandBus: ICommandBus) {
    this.commandBus = commandBus;
  }

  public async manageToken(): Promise<void> {
    const myStore = store;
    if (myStore.getters.getAuthInfo && myStore.getters.getAuthInfo.isValidToken()) {
      return;
    } 
    await this.requestAuthInfo();
  }

  async requestAuthInfo(): Promise<void> { 
    try {
      const clientInfo = new ClientInfoCommand();
      const authInfo = await this.commandBus.sendAsync(clientInfo);
      store.commit('setAuthInfo', authInfo)
    } catch (error) {
        console.log(error)
    }
  }

}