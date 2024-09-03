'use client'

import React, {useEffect} from 'react';

import styles from '@/app/page.module.css'
import ArticleItem from "@/components/article_item/article_item";
import page from '@/app/posts/page.module.css'
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getPosts} from "@/redux/lib/blogs";
import Link from "next/link";
import global from "@/app/page.module.css";

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


export default function BlogsData() {

    const dispatch = useAppDispatch()

    const {ABlogs} = useAppSelector(state => state.blogs);

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div>
            <div className={styles.content}>
                {ABlogs.items.length > 0 ? ABlogs.items.slice(0,7).map((item, index) => (
                    <div className={`${page[`grid${(index % 14) + 1}`]}`}>
                        <ArticleItem name={item.title} image={item.cover} description={item.description} views={item.views} id={item.id}
                                     type={flexRow.includes((index % 14) + 1) ? 'flexRow' : flexColumn.includes((index % 14) + 1) ? 'flexColumn'
                                         : without.includes((index % 14) + 1) ? 'withoutImage' : 'full'}/>
                    </div>
                    )) : null }
            </div>

        </div>
    );
};

