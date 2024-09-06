import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { resolve } from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import VueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'
// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    // VueDevTools(),
    vue(),
    vueJsx(),
    
    Pages({
      dirs: [{ dir: 'src/app', baseRoute: '', filePatern: '**/*.page.*' }],
      onRoutesGenerated: (routes) => {
        return routes.map((route: any) => {
          return {
            ...route,
            path: `${route.path.replace(/\/index|\.page/g, '')}`.replace(
              /\[(\.\.\.)?(\w+)\]/g,
              ':$2'
            )
          }
        })
      },
      extensions: ['vue', 'tsx'],
      exclude: ['**/components/**/**/*']
    }),
    Components({
      dirs: ['src/components', 'src/app'],
      directoryAsNamespace: true,

      resolvers: [NaiveUiResolver()]
    }),
    createSvgIconsPlugin({
      iconDirs: [
        resolve(process.cwd(), 'src/assets/svgs'),
        resolve(process.cwd(), '../../assets/svgs')
      ],
      symbolId: 'icon-[dir]-[name]',
      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__icons__'
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        },
        {
          core: ['definePlugin', 'defineMiddleware']
        }
      ],
      dirs: ['src/composables', 'src/stores', 'src/app/**/*.*', 'src/config/**/*.*'],
      vueTemplate: true,
      eslintrc: {
        enabled: true
      }
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default.layout'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': '../..'
    }
  },
  build: {
    target: 'esnext'
  }
})
