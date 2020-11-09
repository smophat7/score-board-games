import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import DashBoard from '../views/DashBoard.vue'
import Group from '../views/Group.vue'
import Personal from '../views/Personal.vue'
import Shelf from '../views/Shelf.vue'
import Members from '../views/Members.vue'
import GameplayHistory from '../views/GameplayHistory.vue'
import RecordGame from '../views/RecordGame.vue'
import RecordSelectGamePlayed from '../views/RecordSelectGamePlayed.vue'
import RecordSelectPlayers from '../views/RecordSelectPlayers.vue'
import RecordSelectGameType from '../views/RecordSelectGameType.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
    children: [
      {
        path: 'group',
        name: 'Group',
        component: Group
      },
      {
        path: 'personal',
        name: 'Personal',
        component: Personal
      },
      {
        path: 'shelf',
        name: 'Shelf',
        component: Shelf
      },
      {
        path: 'members',
        name: 'Members',
        component: Members
      },
      {
        path: 'gameplay-history',
        name: 'GameplayHistory',
        component: GameplayHistory
      },
      {
        path: 'record-game',
        name: 'RecordGame',
        component: RecordGame,
        children: [
          {
            path: 'select-game-played',
            name: 'RecordSelectGamePlayed',
            component: RecordSelectGamePlayed
          },
          {
            path: 'select-players',
            name: 'RecordSelectPlayers',
            component: RecordSelectPlayers
          },
          {
            path: 'select-game-type',
            name: 'RecordSelectGameType',
            component: RecordSelectGameType
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
