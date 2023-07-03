import { Component, Vue, Provide } from "vue-property-decorator";
import {ICommandBus} from "@/application/buses/ICommandBus";
import {IQueryBus} from "@/application/buses/IQueryBus";
import container from "./infrastructure/config/ioc_config";
import { COMMAND_IDENTIFIER, SERVICE_IDENTIFIER, QUERY_IDENTIFIER } from "./infrastructure/constants/identifiers";
import { IAuthService } from "./infrastructure/services/IAuthService";

@Component({
  components: {}
})
export default class App extends Vue {
  @Provide()
  commandBus: ICommandBus = container.get<ICommandBus>(
    COMMAND_IDENTIFIER.COMMAND_BUS
  );

  @Provide()
  queryBus: IQueryBus = container.get<IQueryBus>(
    QUERY_IDENTIFIER.QUERY_BUS
  );

  @Provide()
  authService: IAuthService = container.get<IAuthService>(
    SERVICE_IDENTIFIER.AUTH_SERVICE
  );

}