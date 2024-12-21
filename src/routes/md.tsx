import { A } from "@solidjs/router";
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { createEffect, createSignal } from 'solid-js';

export default function HelloMd() {
    const processor = unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkMath)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeStringify)
    const mdFile = `# Pluto\n\n [url](https://remark.js.org/)`;
    const [md, setMd] = createSignal("");

    createEffect(async () => {
        try {
            const result = await processor.process(mdFile);
            console.log("Processed Markdown:", String(result));
            setMd(String(result));
        } catch (error) {
            console.error("Error processing Markdown:", error);
        }
    });
    
    return <article class="prose lg:prose-xl"><div innerHTML={md()} /></article>;
}
