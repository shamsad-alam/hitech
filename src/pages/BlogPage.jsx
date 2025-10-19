import React from "react";

// src/pages/BlogPage.jsx

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "Building Modern UIs with React",
            excerpt: "A short guide to composing components, state management, and performance tips.",
            image: "https://images.unsplash.com/photo-1526379095098-7f5e6b8861d6?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Design Systems: Consistency at Scale",
            excerpt: "How a design system saves time, increases quality, and improves collaboration.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Deploying Fast with Vite",
            excerpt: "Tips to speed up development and production builds using Vite and modern tooling.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-10 px-4 bg-gray-50 text-gray-900">
            <h2 className="text-center mb-6 text-2xl font-semibold">Latest Posts</h2>

            <div className="flex flex-wrap justify-center gap-5">
                {posts.map(post => (
                    <article
                        className="w-[320px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-150 hover:-translate-y-1 hover:shadow-lg"
                        key={post.id}
                    >
                        <img className="w-full h-44 object-cover" src={post.image} alt={post.title} />
                        <div className="p-4 flex flex-col gap-2 min-h-[140px]">
                            <h3 className="m-0 text-base font-medium">{post.title}</h3>
                            <p className="m-0 text-sm text-gray-600 flex-1">{post.excerpt}</p>
                            <a className="inline-block px-3 py-2 bg-blue-600 text-white rounded-md text-sm w-max" href="#">Read more →</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}