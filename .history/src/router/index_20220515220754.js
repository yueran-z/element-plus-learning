import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'
import Calendar from '../views/Calendar.vue'
import Table from '../views/Table.vue'
import Form from '../views/Form.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
