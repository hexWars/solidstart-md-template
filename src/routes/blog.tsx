import { useParams, RouteSectionProps } from "@solidjs/router";
import { Show, createMemo } from "solid-js";
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const posts = import.meta.glob('../contents/**/*.md', { eager: true });

export default function BlogLayout(props: RouteSectionProps) {
    const params = useParams();

    const currentPost = createMemo(() => {
        const postPath = `../contents/${params.slug}.md`;
        return posts[postPath] as any;
    });

    return (
        <div class="container py-8">
            <Show when={currentPost()} fallback={<div>no found</div>}>
                <article class="prose lg:prose-xl dark:prose-invert">
                    <h1>{currentPost()?.attributes?.title}</h1>
                    <div innerHTML={currentPost()?.html} />
                </article>
            </Show>
            {props.children}
        </div>
    );
}