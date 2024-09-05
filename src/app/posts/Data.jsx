'use client'
import React, {useEffect} from 'react';

import page from './page.module.css'
import ArticleItem from "@/components/article_item/article_item";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getByTag, getPosts} from "@/redux/lib/blogs";
import { useSearchParams} from "next/navigation";
import Nothing from "@/components/nothing/Nothing";
import LoadingSceleton from "@/components/loading/LoadingSceleton";

export default function Data() {

    const dispatch = useAppDispatch();
    const { ABlogs } = useAppSelector(state => state.blogs);
    const searchParams = useSearchParams()


    useEffect(() => {
        if(searchParams.get('tagId') !== null){
            dispatch(getByTag(searchParams.get('tagId')))
        }
        else{
        dispatch(getPosts());
        }
    }, [ABlogs.length < 0]);

    // console.log('searchParams', searchParams.get('tagId'))
    const flexRow = [2, 3, 6, 7, 8, 10, 11, 14];
    const flexColumn = [4, 12];
    const without = [5, 13];

    if(ABlogs.status === 'loading'){
        return (
            <LoadingSceleton/>
        )
    }

    return (
        <>
        {ABlogs?.items.length > 0 ?
        <main className={page.grid}>
            {ABlogs.items.toReversed().map((item, index) => (
                <div className={`${page[`grid${(index % 14) + 1}`]} ${page.cards}`} >
                    {/*<CaseItem name={item.name}  />*/}
                    <ArticleItem name={item.title} description={item.description} views={item.views} image={item.cover} id={item.id}
                                 type={flexRow.includes((index % 14) + 1) ? 'flexRow' : flexColumn.includes((index % 14) + 1) ? 'flexColumn'
                                     : without.includes((index % 14) + 1) ? 'withoutImage' : 'full' }/>
                </div>
            ))}
        </main>
            :<Nothing/>}
        </>
    );
};

