import { defineMiddleware } from '../core'

export default defineMiddleware((to, from, next) => {
  // console.log('exampleMiddleware', from, to)
  next()
})
