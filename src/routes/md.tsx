import { A } from "@solidjs/router";
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { createEffect, createSignal } from 'solid-js';

// 使用 glob 导入所有 markdown 文件
const posts = import.meta.glob('../contents/**/*.md', { eager: true });

export default function HelloMd() {
    // 遍历所有文件
    console.log("文章数量:" + posts.length);
    Object.entries(posts).forEach(([path, post]) => {
        console.log(path);
        console.log(post.attributes); // 访问 frontmatter
        console.log(post.html);  // 访问渲染后的 HTML
    });

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
