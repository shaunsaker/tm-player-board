import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'

// @ts-expect-error TODO: SS appJson exists, I'm not sure how to get vite to recognise that 🤷‍♂️
import appJson from './app.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        // enables us to size svg's with the css font-size property
        icon: '1em',
        // enables us to colour svg's with the css color property
        // you need to set the relevant colours to #000000 in the svg file for this to work
        // TODO: SS find a way to automagically do this with all colours, e.g. svgo convertColors plugin
        replaceAttrValues: { '#000000': 'currentColor' },
      },
    }),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['/favicon.ico', '/apple-touch-icon.png', '/icon.svg'],
      manifest: {
        name: appJson.displayName,
        short_name: appJson.displayName,
        description: appJson.description,
        theme_color: appJson.themeColor,
        start_url: '/',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icon-192.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),

    // @ts-expect-error vite-plugin-handlebars types incorrect
    handlebars({
      context: {
        title: appJson.displayName,
        description: appJson.description,
        themeColor: appJson.themeColor,
        backgroundColor: appJson.backgroundColor,
      },
    }),
  ],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
