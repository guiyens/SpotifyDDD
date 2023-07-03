/* eslint-disable @typescript-eslint/no-empty-function */
import { shallowMount } from '@vue/test-utils'
import ResultBox from '@/infrastructure/components/ResultBox/ResultBox.vue'

let wrapper: any; 

describe('ResultBox.vue ', () => {
  
  //Arrange
  beforeAll(() => {
    wrapper = shallowMount(ResultBox, {
      propsData: {
        info: [],
        resultType: {}
      }
    });
  })

  describe('When call playTrack function', () => {
    it('should emit playTrack event', async() => {
      //Action
      await wrapper.vm.playTrack("url");
      //Assert
      expect(wrapper.emitted().playTrack).toBeTruthy();
    })
  
  })
  
})

