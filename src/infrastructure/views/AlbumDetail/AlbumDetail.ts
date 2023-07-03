import { Component, Vue, Inject } from 'vue-property-decorator';
import { ICommandBus } from '@/application/buses/ICommandBus';
import { IQueryBus } from '@/application/buses/IQueryBus';
import { Album, AuthInfo } from '@/domain/entities';
import { GetAlbumByIdQuery } from '@/application/queries/GetAlbumByIdQuery';
import { IAuthService } from '@/infrastructure/services/IAuthService';

@Component({
})

export default class AlbumDetail extends Vue {
    @Inject()
    commandBus!: ICommandBus;
  
    @Inject()
    queryBus!: IQueryBus;

    @Inject()
    authService!: IAuthService;

    album: Album | null = null;
    
    async getAlbumId(albumSelectedId: string, authInfo: AuthInfo): Promise<void> { 
        try {
            const albumInfo = new GetAlbumByIdQuery(authInfo.accessToken, albumSelectedId);
            this.album = await this.queryBus.sendAsync(albumInfo);
        } catch (error) {
            console.log(error)
        }
    }

    async mounted(): Promise<void> { 
        const albumSelectedId = this.$route.params.id;
        await this.authService.manageToken();
        const authInfo = this.$store.getters.getAuthInfo;
        this.getAlbumId(albumSelectedId.toString(), authInfo);
    }
    
}