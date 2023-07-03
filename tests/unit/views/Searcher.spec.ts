/* eslint-disable @typescript-eslint/no-empty-function */
import moxios from 'moxios'
import { shallowMount } from '@vue/test-utils'
import Searcher from '@/infrastructure/views/Searcher/Searcher.vue'
import { authService, commandBus, queryBus } from '../mockInjections'

let $route, $store, wrapper: any; 

const authData = {
  access_token: "dsnfnsdfjkbsdjkfnkjsdbf",
  token_type: "Barer",
  expiresIn: 3600
}

const searchDateResponse = {
  data: {
    tracks: [{ name: "Lorem", id: "jhbshjbas", album: { images: ["", "", ""] }, duration_ms: 3000, preview_url: "" }],
    albums: [{ name: "Lorem", id: "jhbshjbas", images: ["", "", ""], release_date: "2018-02-02" }],
    artists: [{ name: "Lorem", id: "jhbshjbas", images: ["", "", ""] }]
  }
  
}

beforeEach(function () {
  moxios.install()
  moxios.stubRequest('https://api.spotify.com/v1/search?q=delaossa&type=track%2Calbum%2Cartist', {status: 200, response: searchDateResponse });
  moxios.stubRequest('https://accounts.spotify.com/api/token', {status: 200, response: { data: authData} })
})

afterEach(function () {
  moxios.uninstall()
})

describe('Searcher.vue ', () => {
  
  //Arrange
  beforeAll(() => {

    $route = {
      params: {}
    };

    $store = {
      getters: {
        getAuthInfo: authData
      }
    };
    
    wrapper = shallowMount(Searcher, {
      stubs: ['router-link'],
      mocks: { $route, $store },
      provide: {
          commandBus: () => commandBus,
          queryBus: () => queryBus,
          authService: () => authService
      }
    });

    //Arrange 
    wrapper.vm.authService.manageToken = () => { };
    wrapper.vm.queryBus.sendAsync = (searchInfo: string) => {return searchDateResponse.data};
    jest.spyOn(wrapper.vm, "searchAll");
    jest.spyOn(wrapper.vm.authService, "manageToken");
    jest.spyOn(wrapper.vm.queryBus, "sendAsync");
    
  })

  describe('When call search function', () => {
    it('should call searchAll', async() => {
      //Action
      await wrapper.vm.search("delaossa");
      //Assert
      expect(wrapper.vm.searchAll).toHaveBeenCalled();
    })

    it('should call authService.manageToke', async() => {
      //Action
      await wrapper.vm.search("delaossa");
      //Assert
      expect(wrapper.vm.authService.manageToken).toHaveBeenCalled();
    })
  })

  describe('When call searchAll function', () => {
    it('and searchData is empty should set searchResult to null', async() => {
      //Action
      await wrapper.vm.searchAll("dsfcdfs", "");
      //Assert
      expect(wrapper.vm.searchResult).toBeNull();
    })

    it('and searchData has value should set searchResult with searchDateResponse', async() => {
      //Action
      await wrapper.vm.searchAll("dsfcdfs", "delaossa");
      //Assert
      expect(wrapper.vm.searchResult).toEqual(searchDateResponse.data);
    })
  })

  describe('When call setTrackActive function ', () => {
    it('should set trackActive to param value', async() => {
      //Action
      await wrapper.vm.setTrackActive("resourceUrl");
      //Assert
      expect(wrapper.vm.trackActive).toBe("resourceUrl");
    })
  })

  
})

