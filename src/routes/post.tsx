import { A } from "@solidjs/router";
const posts = import.meta.glob('../contents/**/*.md', { eager: true });

export default function Post() {
    // 遍历所有文件
    Object.entries(posts).forEach(([path, post]) => {
        console.log(path);
        console.log(post.attributes); // 访问 frontmatter
        console.log(post.html);  // 访问渲染后的 HTML
    });

    return (
        <div class="w-full flex justify-center">
            <ul class="mt-20 container w-[720px]">
                {
                    Object.entries(posts).map(([path, post]) => (
                        <li class="group">
                            <a
                                // href={`/posts/${post.slug}/`}
                                class="flex justify-between rounded-lg px-2 py-1 group-hover:bg-background"
                            >
                                <div class="font-medium">{post.attributes.title}</div>
                                <div
                                    class="font-medium h-6 px-2 bg-transparent text-foreground group-hover:bg-sky-800 group-hover:text-background"
                                >
                                    {post.attributes.pubDate.slice(0, 10)}
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
