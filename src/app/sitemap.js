import {IMAGE_URL} from "@/utils";

async function fetchPosts() {
    const res = await fetch(`${IMAGE_URL}/api/post/getAllPosts`, {
        cache: "no-store"
    });
    const posts = await res.json();

    return posts.map(post => (post.id.toString()));
}
async function fetchCases() {
    const res = await fetch(`${IMAGE_URL}/api/post/getCases`, {
        cache: "no-store"
    });
    const cases = await res.json();

    return cases.map(item => (item.id.toString()));
}

export default async function sitemap() {
    const posts = await fetchPosts()
    const cases = await fetchPosts()

    const postEntries = posts.map(post => ({
        url: `https://aimani.org/posts/${post}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    }));

    const caseEntries = cases.map(post => ({
        url: `https://aimani.org/cases/${post}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    }));
    return [
        {
            url: 'https://aimani.org',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://aimani.org/#about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://aimani.org/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://aimani.org/#services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://aimani.org/posts',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...postEntries,
        {
            url: 'https://aimani.org/cases',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...caseEntries
    ]
}