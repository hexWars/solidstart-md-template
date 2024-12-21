import { defineConfig } from "@solidjs/start/config";
import { plugin as mdPlugin } from 'vite-plugin-markdown'

export default defineConfig({
    vite: {
        plugins: [
            mdPlugin()
        ],
    },
    server: {
        prerender: {
            routes: ["/", "/about"]
        }
    }
});
