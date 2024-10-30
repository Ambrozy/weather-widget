/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** usage `import.meta.env.ACCUWEATHER_API_KEY` */
    readonly ACCUWEATHER_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
