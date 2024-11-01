/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** usage `import.meta.env.VITE_ACCUWEATHER_API_KEY` */
    readonly VITE_ACCUWEATHER_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
