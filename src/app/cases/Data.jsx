import React from 'react';

import page from './page.module.css'
import CaseItem from "@/components/case_items/case_item";

export default function Data({cases}) {
    return (
            <div className={page.grid}>
                {cases?.length > 0 ? cases?.toReversed().map((item, index) => (
                    <div className={`${page[`grid${(index % 14) + 1}`]}`} >
                        <CaseItem name={item.name} image={item.cover} id={item.id} />
                    </div>
                )) : null }
            </div>
    );
};

