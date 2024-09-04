import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { definePlugin } from '@/core/src'
export default definePlugin((app) => {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  // app.use({ install: () => pinia })
  app.use(pinia as any)
})
