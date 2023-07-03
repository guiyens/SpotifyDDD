import { Component, Vue, Inject } from 'vue-property-decorator';
import { ICommandBus } from '@/application/buses/ICommandBus';
import { IQueryBus } from '@/application/buses/IQueryBus';
import { SearchInfoQuery } from '@/application/queries/SearchInfoQuery';
import { SearchResult } from '@/domain/entities/SearchResult';
import { IAuthService } from '@/infrastructure/services/IAuthService';
import SearchBox from '@/infrastructure/components/SearchBox/SearchBox.vue';
import ResultBox from '@/infrastructure/components/ResultBox/ResultBox.vue';
import { ResultTypes } from '@/domain/enum'

@Component({
    components: {
        SearchBox,
        ResultBox
    }
})

export default class Searcher extends Vue {
    @Inject()
    commandBus!: ICommandBus;
  
    @Inject()
    queryBus!: IQueryBus;

    @Inject()
    authService!: IAuthService;

    searchResult: SearchResult | null = null;
    resultTypes = ResultTypes;
    trackActive: string | null = null;

    async searchAll(accessToken: string, searchData: string): Promise<void> {
        try {
            const searchInfo = new SearchInfoQuery(accessToken, searchData);
            if (!searchInfo.isValid()) { 
                this.searchResult = null; 
                return;
            }
            this.searchResult = await this.queryBus.sendAsync(searchInfo);
        } catch (error) {
            console.log(error)
        }
    }

    async search(searchData: string): Promise<void> { 
        await this.authService.manageToken()
        const authInfo = this.$store.getters.getAuthInfo;
        await this.searchAll(authInfo.accessToken, searchData);
    }

    setTrackActive(src: string): void {
        this.trackActive = null;
        this.$nextTick(() => { 
            this.trackActive = src;
        })
        
    }
    
}