import { Component, Vue, Inject } from 'vue-property-decorator';
import { ICommandBus } from '@/application/buses/ICommandBus';
import { IQueryBus } from '@/application/buses/IQueryBus';
import { IAuthService } from '@/infrastructure/services/IAuthService';
import { Artist, AuthInfo } from '@/domain/entities';
import { GetArtistByIdQuery } from '@/application/queries/GetArtistByIdQuery';


@Component({
    computed: {
        id() {
          return this.$route.params.id;
        }
      }
})

export default class ArtistDetail extends Vue {
    @Inject()
    commandBus!: ICommandBus;
  
    @Inject()
    queryBus!: IQueryBus;

    @Inject()
    authService!: IAuthService;

    artist: Artist | null = null;

    async getArtistId(artistSelectedId: string, authInfo: AuthInfo): Promise<void> { 
        try {
            const artistInfo = new GetArtistByIdQuery(authInfo.accessToken, artistSelectedId);
            this.artist = await this.queryBus.sendAsync(artistInfo);
        } catch (error) {
            console.log(error)
        }
    }

    async mounted(): Promise<void> { 
        await this.authService.manageToken();
        const authInfo = this.$store.getters.getAuthInfo;
        await this.getArtistId(this.$route.params.id.toString(), authInfo);
    }
    
}