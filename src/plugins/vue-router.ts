import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'
// @ts-ignore
import { setupLayouts } from 'virtual:generated-layouts'
import { definePlugin } from '../core'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory('/appsname/'),
  routes
})

const modules = import.meta.glob('../middlewares/*.ts', {
  eager: true
})

Object.values(modules).forEach((module: any) => {
  return router.beforeEach(module?.default)
})

export default definePlugin((app) => {
  // @ts-ignore
  app.use(router)
})
