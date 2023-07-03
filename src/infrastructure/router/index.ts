import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Searcher from '@/infrastructure/views/Searcher/Searcher.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Searcher',
    component: Searcher
  },
  {
    path: '/AlbumDetail/:id',
    name: 'AlbumDetail',
    component: () => import(/* webpackChunkName: "AlbumDetail" */ '@/infrastructure/views/AlbumDetail/AlbumDetail.vue')
  },
  {
    path: '/ArtistDetail/:id',
    name: 'ArtistDetail',
    component: () => import(/* webpackChunkName: "ArtistDetail" */ '@/infrastructure/views/ArtistDetail/ArtistDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
