/* eslint-disable @typescript-eslint/no-empty-function */
import { shallowMount } from '@vue/test-utils'
import SearchBox from '@/infrastructure/components/SearchBox/SearchBox.vue'

let wrapper: any; 
let $store;
const lastSearch = "prueba"

describe('SearchBox.vue ', () => {
  
  //Arrange
  beforeAll(() => {
    $store = {
      getters: {
        getLastSearch: lastSearch
      },
      commit: () => {}
    };

    wrapper = shallowMount(SearchBox, {
      mocks: { $store },
    });

    jest.spyOn(wrapper.vm.$store, "commit");
    jest.spyOn(wrapper.vm, "type");
  })

  describe('When mount componebt ', () => {
    it('should set searchData with lastSearch', async() => {
      //Action
      await wrapper.vm.$mount();
      //Assert
      expect(wrapper.vm.searchData).toBe(lastSearch);
    })

  })

  describe('When call type function ', () => {
    it('should emit searching event', async() => {
      //Action
      await wrapper.vm.type();
      //Assert
      expect(wrapper.emitted().searching).toBeTruthy();
    })

    it('should call $store commit', async() => {
      //Action
      await wrapper.vm.type();
      //Assert
      expect(wrapper.vm.$store.commit).toHaveBeenCalled();
    })
  })
  
})

