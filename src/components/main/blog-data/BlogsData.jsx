import React from 'react';
import styles from '@/app/page.module.css'
import ArticleItem from "@/components/article_item/article_item";
import page from '@/app/posts/page.module.css'
import LoadingSceleton from "@/components/loading/LoadingSceleton";
import {IMAGE_URL} from "@/utils";

const data = []

for (let i = 1; i < 62; ++i) {
    data.push({
        key: i.toString(),
        name: i.toString() + ' product',
        price: Math.floor(Math.random() * 120000)
    });
}

const flexRow = [2, 3, 6, 7, 8, 10, 11, 14];
const flexColumn = [4, 12];
const without = [5, 13];

async function fetchData() {
    const response = await fetch(`${IMAGE_URL}/api/post/getAllPosts`, {
        cache: "no-store"
    })
    if (!response.ok)
        return [];
    return response.json();
}

export default async function BlogsData() {
    const data = await fetchData()

    return (
        <div id={'posts'}>
            {data.length > 0 ?
            <div className={styles.content}>
                {data.slice(0,7).map((item, index) => (
                    <div className={`${page[`grid${(index % 14) + 1}`]} ${styles.cards}`} key={item.id}>
                        <ArticleItem name={item.title} image={item.cover} description={item.description} views={item.views} id={item.id}
                                     type={flexRow.includes((index % 14) + 1) ? 'flexRow' : flexColumn.includes((index % 14) + 1) ? 'flexColumn'
                                         : without.includes((index % 14) + 1) ? 'withoutImage' : 'full'}/>
                    </div>
                    ))}
            </div>
                : <LoadingSceleton/> }
        </div>
    );
};

