import { useParams, RouteSectionProps } from "@solidjs/router";
import { createMemo } from "solid-js";

const posts = import.meta.glob('../../contents/**/*.md', { eager: true });

export default function BlogPage() {
    const params = useParams();

    const currentPost = createMemo(() => {
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
            <h1 class="text-5xl font-bold mb-4 text-gray-900">
                {currentPost().attributes.title}
            </h1>

            <div class="flex flex-wrap gap-2 pb-10">
                {currentPost().attributes.tags?.map((tag: string, index: number) => (
                    <span
                        class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <article class="prose prose-base dark:prose-invert">
                <div innerHTML={currentPost()?.html} />
            </article>
        </div>
    );
}