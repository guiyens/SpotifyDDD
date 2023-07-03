import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class SearchBox extends Vue {
  searchData = "";
  
  type(): void { 
    this.$store.commit('setLastSearch', this.searchData)
    this.$emit('searching', this.searchData)
  }

  mounted(): void { 
    if (this.$store.getters.getLastSearch) { 
      this.searchData = this.$store.getters.getLastSearch;
      this.type();
    }
  }
    
}