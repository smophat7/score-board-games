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
import RecordGame from '../views/RecordGame.vue'

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
        path: 'record-game',
        name: 'RecordGame',
        component: RecordGame
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
