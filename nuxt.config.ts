// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    future: {compatibilityVersion: 4},
    devtools: {enabled: true},
    modules: ['@nuxthub/core', 'nuxt-auth-utils', '@nuxtjs/tailwindcss', 'shadcn-nuxt','@nuxt/fonts'],
    hub: {
        database: true
    },
    fonts:{
        families: [
            {
                name: 'Geist',
                provider: 'local',
                weights: [100,200,300,400,500,600,700,800,900],
                display: 'swap',
                fallbacks: ['Arial', 'Helvatica'],
            },
        ],
    },
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './app/components/ui'
    },
    alias: {
        '~': currentDir,
    },
    components: [
        {
            path: join(currentDir, './app/components'),
            // this is required else Nuxt will autoImport `.ts` file
            extensions: ['.vue'],
        },
        {
            path: join(currentDir, './app/components/ui'),
            // this is required else Nuxt will autoImport `.ts` file
            extensions: ['.vue'],
        },
    ],

})