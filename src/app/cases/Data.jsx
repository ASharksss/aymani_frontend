'use client'

import React, {useEffect} from 'react';

import page from './page.module.css'
import CaseItem from "@/components/case_items/case_item";


import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import { getCases } from "@/redux/lib/cases";

export default function Data({}) {

    const dispatch = useAppDispatch();
    const { cases } = useAppSelector(state => state.cases);

    useEffect(() => {
        dispatch(getCases());
        // console.log(cases)
    }, []);

    return (
            <div className={page.grid}>
                {cases?.items.length > 0 ? cases?.items.map((item, index) => (
                    <div className={`${page[`grid${(index % 14) + 1}`]}`} >
                        <CaseItem name={item.name} image={item.cover} id={item.id} />
                    </div>
                )) : null }
            </div>
    );
};

