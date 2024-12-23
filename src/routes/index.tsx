import { A } from "@solidjs/router";
const posts = import.meta.glob('../contents/**/*.md', { eager: true });

export default function Post() {
    return (
        <div class="w-full flex justify-center">
            <ul class="mt-20 container">
                {
                    Object.entries(posts).map(([path, post]) => (
                        <li class="group">
                            <A
                                href={`/contents/${path.replace('../../contents/', '').replace('.md', '')}`}
                                class="flex justify-between rounded-lg py-1 group-hover:bg-muted"
                            >
                                <div class="font-medium truncate ">{post.attributes.title}</div>
                                <div
                                    class="font-medium text-nowrap h-6 px-2 rounded-md bg-transparent text-foreground group-hover:bg-ring group-hover:text-background"
                                >
                                    {post.attributes.pubDate.slice(0, 10)}
                                </div>
                            </A>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
