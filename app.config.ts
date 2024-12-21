import { defineConfig } from "@solidjs/start/config";
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown'

export default defineConfig({
    vite: {
        plugins: [
            mdPlugin({
                mode: [Mode.HTML, Mode.MARKDOWN]
            })
        ],
    },
    server: {
        prerender: {
            routes: ["/", "/about"]
        }
    }
});
