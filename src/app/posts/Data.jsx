import React from 'react';

import page from './page.module.css'
import ArticleItem from "@/components/article_item/article_item";
import Nothing from "@/components/nothing/Nothing";
import LoadingSceleton from "@/components/loading/LoadingSceleton";

export default function Data({posts, loading = false}) {
    const flexRow = [2, 3, 6, 7, 8, 10, 11, 14];
    const flexColumn = [4, 12];
    const without = [5, 13];

    if (loading) {
        return (
            <LoadingSceleton/>
        )
    }

    return (
        <>
            {posts?.length > 0 ?
                <main className={page.grid}>
                    {posts.map((item, index) => (
                        <div className={`${page[`grid${(index % 14) + 1}`]} ${page.cards}`}>
                            {/*<CaseItem name={item.name}  />*/}
                            <ArticleItem name={item.title} description={item.description} views={item.views}
                                         time={item.createdAt}
                                         image={item.cover} id={item.id}
                                         type={flexRow.includes((index % 14) + 1) ? 'flexRow' : flexColumn.includes((index % 14) + 1) ? 'flexColumn'
                                             : without.includes((index % 14) + 1) ? 'withoutImage' : 'full'}/>
                        </div>
                    ))}
                </main>
                : <Nothing/>}
        </>
    );
};

