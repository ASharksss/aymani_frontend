import React from 'react';
import styles from '../../page.module.css'
import page from "@/app/page.module.css";

import CaseTitle from "@/components/case_items/title/CaseTitle";
import WorkProgress from "@/components/case_items/work-progress/WorkProgress";
import Projects from "@/components/main/projects/Projects";
import CaseItem from "@/components/case_items/case_item";
import Link from "next/link";



export default function CaseData({data, result}) {

    return (
        <section className={styles.main}>

            {data.length !== 0 ?
                <CaseTitle type={data.name}
                           tag={data.tag.name}
                           date={data.createdAt}
                           companyname={data.customer}
                           developers={'Тима Sairommef Алсу'}/>
                :
                <CaseTitle type={'NULL'} date={'NULL'} companyname={'NULL'}
                           developers={'NULL'}/>
            }

            <Projects text={'РЕЗУЛЬТАТ'} tablet={result.desktop_version} mobile={result.mobile_version}/>

            <span className={styles.span}> asdfasf</span>


            {data.length !== 0 ?
                data.case_blocks.filter((block) => block.type_block !== "Результат").map((step, index) => (
                    <WorkProgress header={step.type_block}
                                  key={step.id}
                                  text={step.text}
                                  colors={step.color_shems.length > 0 ? step.color_shems : false}
                                  numb={index + 1}
                                  shar={step.type_block.toLowerCase() === 'планирование'}
                                  unique={step.color_shems.length > 0}
                                  blockquote={step.description}
                                  image={step.attachment}
                                  imageTitle={step.attachment_title}
                    />
                ))
                : null}

            {data.length !== 0 ?
                data.case_blocks.filter((block) => block.type_block === "Результат").map((step) => (
                    <WorkProgress header={'Результат'}
                                  key={step.id}
                                  text={step.text}
                                  colors={step.color_shems.length > 0 ? step.color_shems : false}
                                  numb={null}
                                  shar={step.type_block.toLowerCase() === 'планирование'}
                                  unique={step.color_shems.length > 0}
                                  blockquote={step.description}
                                  image={step.attachment}
                                  imageTitle={step.attachment_title}
                    />
                ))
                : null}


            <div className={styles.anotherProjects}>
                {data?.cases.length > 0 ?
                    data?.cases.map((item) => (
                        <div className={styles.project} key={item.id}>
                            <CaseItem name={item.name} image={item.cover} id={item.id}/>
                        </div>
                    )) : null
                }
            </div>
            <Link href={'/cases'} className={page.link}>Смотреть еще</Link>
        </section>
    );
};

