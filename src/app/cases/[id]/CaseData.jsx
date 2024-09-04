'use client'
import React, {useEffect} from 'react';
import styles from '../../page.module.css'
import page from "@/app/page.module.css";

import CaseTitle from "@/components/case_items/title/CaseTitle";
import WorkProgress from "@/components/case_items/work-progress/WorkProgress";
import Projects from "@/components/main/projects/Projects";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getCases, getOneCase} from "@/redux/lib/cases";
import {useParams} from "next/navigation";
import CaseItem from "@/components/case_items/case_item";
import Link from "next/link";


export default function CaseData() {

    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {oneCase} = useAppSelector(state => state.cases)
    const { cases } = useAppSelector(state => state.cases)

    useEffect(() => {
        dispatch(getOneCase(id))
    }, [])
    useEffect(() => {
        dispatch(getCases())
    }, [])

    return (
        <section className={styles.main}>
            {oneCase?.items.length !== 0 ?
                <CaseTitle type={oneCase?.items.name}
                           tag={oneCase?.items.tag.name}
                           date={oneCase?.items.createdAt} companyname={oneCase?.items.customer}
                           developers={'FOra Hola DOra'}/>
                :
                <CaseTitle type={'NULL'} date={'NULL'} companyname={'NULL'}
                           developers={'NULL'}/>
            }

            {oneCase?.items.length !== 0 ?
                oneCase?.items.case_blocks.map((step, index) => (
                        <WorkProgress header={step.type_block}
                                      key={step.id}
                                      text={step.text}
                                      colors={step.color_shems.length > 0 ? step.color_shems : false}
                                      numb={index + 1}
                                      shar={step.type_block.toLowerCase() === 'планирование'}
                                      unique={step.color_shems.length > 0}
                                      blockquote={step.attachment_title}
                                      image={step.attachment}
                                      imageTitle={step.attachment_title}
                        />
                    ))
                : null}
            <Projects text={'РЕЗУЛЬТАТ'} tablet={oneCase?.result.desktop_version} mobile={oneCase?.result.mobile_version}/>

            <span className={styles.span}> asdfasf</span>
                <div className={styles.anotherProjects}>
                    {cases?.items.length > 0 ?
                        cases?.items.slice(0,3).map((item) => (
                            <div className={styles.project} key={item.id}>
                            <CaseItem name={item.name} image={item.cover} id={item.id} />
                            </div>
                        )) : null
                    }
                </div>
                <Link href={'/cases'} className={page.link}>Смотреть еще</Link>
        </section>
    );
};

