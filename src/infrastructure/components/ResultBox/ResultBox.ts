import { Music } from '@/domain/entities';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ResultTypes }  from '@/domain/enum'

@Component({})

export default class ResultBox extends Vue {
  
  @Prop() info!: Array<Music>;
  @Prop() resultType!: ResultTypes;

  resultTypes = ResultTypes;

  playTrack(url: string): void{
    this.$emit('playTrack', url)
  }

}