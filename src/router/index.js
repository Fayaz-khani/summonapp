import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../components/Navigation/LoginPage.vue'

import summons from '../components/Summon/SummonPage.vue'
import pending from '../components/Summon/PendingPage.vue'
import summondetails from '../components/Summon/SummonDetails.vue'
import search from '../components/Summon/SearchSummon.vue'
import viewsummon from '../components/Summon/ViewSummon.vue'
import setting from '../components/Summon/SettingPage.vue'
import profile from '../components/User/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
{
  path: '/summons',
  name: 'summons',
  component: summons
},
{
  path: '/pending',
  name: 'pending',
  component: pending
},
{
  path: '/summondetails',
  name: 'summondetails',
  component: summondetails
},
{
  path: '/search',
  name: 'search',
  component: search
},
{
  path: '/viewsummon',
  name: 'viewsummon',
  component: viewsummon
},
{
  path: '/profile',
  name: 'profile',
  component: profile
},
{
  path: '/setting',
  name: 'setting',
  component: setting
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
