import { useParams, RouteSectionProps } from "@solidjs/router";
import { createMemo } from "solid-js";

const posts = import.meta.glob('../../contents/**/*.md', { eager: true });

export default function BlogPage() {
    const params = useParams();

    const currentPost = createMemo(() => {
        console.log(params.filename);
        let article = null;
        const decodedFilename = decodeURIComponent(params.filename); // Decode URL parameter

        Object.entries(posts).forEach(([path, post]) => {
            const relativePath = path.replace('../../contents/', '').replace('.md', '');
            if (relativePath === decodedFilename) {
                article = post;
            }
        });
        return article as any;
    });

    return (
        <div class="container py-8">
            <article class="prose prose-lg dark:prose-invert">
                <div innerHTML={currentPost()?.html} />
            </article>
        </div>
    );
}