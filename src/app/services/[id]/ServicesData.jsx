'use client'
import React, {useEffect, useRef, useState} from 'react';

import anime from 'animejs/lib/anime.es.js';

import styles from './page.module.css'

import BackTool from "@/asserts/tools/back-tool/BackTool";
import Definition from "@/components/definition/Definition";
import LineBack from "@/components/svgs/LineBack";
import BorderTarma from "@/components/svgs/BorderTarma";
import Accordion from "@/components/accordion/Accordion";
import CheckBox from "@/components/ui/checkbox/CheckBox";
import ArticleItem from "@/components/article_item/article_item";
import page from "@/app/cases/page.module.css";
import CaseItem from "@/components/case_items/case_item";
import LoadingSceleton from "@/components/loading/LoadingSceleton";
import Nothing from "@/components/nothing/Nothing";
import ServiceRequest from "@/components/main/service-request/ServiceRequest";
import MouseMove from "@/components/mouse-move/MouseMove";

export default function ServicesData({data = {}}) {

    const [cost, setCost] = useState(0);
    const [day, setDay] = useState(0);
    const [checked, setChecked] = useState(0);
    const parent = useRef(null);
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(['var(--base-color)', 'var(--base-color)', 'var(--base-color)', 'var(--base-color)', '#00b061', '#60bd4b', '#98c831', '#d0cf17', '#ffff00', '#ffdd11']);

    const handleCheckboxChange = (checked, dayy, costt) => {
        setDay(checked ? day + dayy : day - dayy);
        setCost(checked ? cost + costt : cost - costt);
    };

    useEffect(() => {
        const checkedFunctionals = data.functionals.filter((f) => f.checked);
        const totalCost = checkedFunctionals.reduce((acc, f) => acc + f.price, 0);
        const totalDays = checkedFunctionals.reduce((acc, f) => acc + f.days, 0);

        setCost(totalCost);
        setDay(totalDays);
    }, [data.functionals]);

    useEffect(() => {
        setChecked([...document.querySelectorAll('input:checked')].length - 1)
        // console.log(checked);
    }, [[...document.querySelectorAll('input:checked')].length - 1])


// ANIMATION
// ANIMATION
// ANIMATION

    let numberOfParticules = 60;
    let windowW = window.innerWidth;
    let windowH = window.innerHeight;
    let colors = ['#dd66ff', '#00b061', '#ff9933', '#d0cf17'];
    let centerX = windowW / 2;
    let centerY = windowH / 2;

    function setParticuleDirection(p) {
        let angle = Math.floor(Math.random() * (360 + 1)) * Math.PI / 180;
        let value = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
        let radius = [-1, 1][anime.random(0, 1)] * value;
        return {
            x: p.x + radius * Math.cos(angle),
            y: p.y + radius * Math.sin(angle)
        };
    }

    function renderParticule(anim) {
        for (let i = 0; i < anim.animatables.length; i++) {
            anim.animatables[i].target.draw();
        }
    }

    function createParticule(x, y, ctx) {
        let p = {};
        p.x = x;
        p.y = y;
        p.color = colors[Math.floor(Math.random() * 4)];
        p.radius = Math.floor(Math.random() * (32 - 16 + 1)) + 16;
        p.endPos = setParticuleDirection(p);
        p.draw = function () {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
            ctx.fillStyle = p.color;
            ctx.fill();
        };
        return p;
    }

    function createCircle(x, y, ctx) {
        let p = {};
        p.x = x;
        p.y = y;
        p.color = '#FFF';
        p.radius = 0.1;
        p.alpha = .5;
        p.lineWidth = 6;
        p.draw = function () {
            ctx.globalCompositeOperation = 'destination-over'
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
            ctx.lineWidth = p.lineWidth;
            ctx.strokeStyle = p.color;
            ctx.stroke();
            ctx.globalAlpha = 1;
        };
        return p;
    }

    function colorChange(){
        if(document.querySelectorAll("input[type=checkbox]").length - 3 === checked){
            setColor(['#00b061', '#60bd4b', '#98c831', '#d0cf17', '#ffff00', '#ffdd11', '#ffbb22', '#ff9933', '#ff7744', '#ff5555', '#dd66ff', '#bb77ff', '#9988ff', '#7799ff'])
        }else{
            setColor(['var(--base-color)', 'var(--base-color)', 'var(--base-color)', 'var(--base-color)', '#00b061', '#60bd4b', '#98c831', '#d0cf17', '#ffff00', '#ffdd11'])
        }
    }

    useEffect(() => {
        colorChange()
    }, [document.querySelectorAll("input[type=checkbox]").length - 3 === checked]);

    useEffect(() => {
            let canvasEl = document.querySelector('#scene');
            let ctx = canvasEl.getContext('2d');

            function setCanvasSize() {
                canvasEl.width = windowW * 2;
                canvasEl.height = windowH * 2;
                canvasEl.style.width = windowW + 'px';
                canvasEl.style.height = windowH + 'px';
            }


            function animateParticules(x, y) {
                let circle = createCircle(x, y, ctx);
                let particules = [];
                for (let i = 0; i < numberOfParticules; i++) {
                    particules.push(createParticule(x, y, ctx));
                }
                anime.timeline().add({
                    targets: particules,
                    x: function (p) {
                        return p.endPos.x;
                    },
                    y: function (p) {
                        return p.endPos.y;
                    },
                    radius: 0.1,
                    duration: Math.floor(Math.random() * (1800 - 1201)) + 1200,
                    easing: 'easeOutExpo',
                    update: renderParticule
                })
            }

            let render = anime({
                duration: Infinity,
                update: function () {
                    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
                }
            });

            function autoClick() {
                animateParticules(
                    Math.floor(Math.random() * (centerX - centerX - 1)) + centerX - 50,
                    Math.floor(Math.random() * (centerY - centerY - 1)) + centerY - 50,)
                setTimeout(() => {
                    try {
                        anime({duration: 200}).finish();
                        anime.remove();
                        anime.animations = [];
                    } catch (e) {
                        console.log('err with animation');
                    }
                }, 5000);
            }
                autoClick();
                setCanvasSize();
                window.addEventListener('resize', setCanvasSize, false);
                setCount(count + 1)
    }, [document.querySelectorAll("input[type=checkbox]").length - 3 === checked && count < 5]);
// ANIMATION
// ANIMATION
// ANIMATION

    return (
        <div className={styles.main} key={'ServiceData'}>
            <div className={styles.backToole}>
                <BackTool/>
            </div>
            <div className={styles.definitions}>
                <Definition head={data.name}
                            id={data.name}
                            description={data.description}/>
            </div>
            <div className={styles.slides}>

                <input type="checkbox" className={styles.input} name="r" id={'calculator'} checked/>
                <input type="checkbox" className={`${styles.input} ${styles.name_from}`} name="r" id='name_form'/>

                <div className={`${styles.slide} ${styles.s1}`}>
                    <div className={styles.calculator}>
                        <div className={styles.somenthing}>
                            <canvas id='scene'></canvas>
                        </div>
                        <div className={styles.lineBack}>
                            <LineBack step_color={color.slice(0, checked)}/>
                        </div>
                        <div className={styles.tarma}>
                            <BorderTarma/>
                        </div>
                        <div className={styles.someIndex}>
                            <Accordion heading={'Калькулятор'}
                                       description={'Тут вы можете удобно определить что хотите видеть в своем будущем приложении\n' +
                                           'Калькулятор удобно рассчитает время и стоимость желаемого проекта'}
                                       fontSize={'big'}/>
                        </div>
                        <div className={styles.columns}>

                            <div className={styles.first}>
                                <Accordion heading={data.name}
                                           description={'Тип услуги'}
                                    // faq
                                           faq_link={`#${data.name}`}
                                           fontSize={'middle'}/>
                                <div className={styles.checkBoxes} ref={parent}>
                                    <MouseMove parent={parent} id={'move'}>
                                        <div className={styles.some}>
                                            <svg fill="var(--focus-color-end)" opacity="0.6" width="48px" height="48px"
                                                 viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.293,8.707a1,1,0,0,1,0-1.414l4-4a1,1,0,0,1,1.414,0l4,4a1,1,0,1,1-1.414,1.414L12,5.414,8.707,8.707A1,1,0,0,1,7.293,8.707Zm0,8,4,4a1,1,0,0,0,1.414,0l4-4a1,1,0,0,0-1.414-1.414L12,18.586,8.707,15.293a1,1,0,1,0-1.414,1.414Z"/>
                                            </svg>
                                        </div>
                                    </MouseMove>
                                    {data?.functionals.length > 0 ?
                                        data?.functionals.map((item) => (
                                            <CheckBox id={item.id} key={item.id + 'checkbox'} label={item.name}
                                                // faq
                                                      onChange={(e) => handleCheckboxChange(e.target.checked, item.days, item.price)}
                                                      description={item.description}
                                                      disabled={item.checked}
                                            />
                                        )) : null
                                    }
                                </div>

                            </div>

                            <div className={styles.second}>
                                <Accordion heading={'Итог'}
                                           fontSize={'middle'}
                                           description={'Выбрано блоков: ' + checked.toString()}
                                />
                                <Accordion heading={`${cost} ₽`}
                                           description={'Стоимость работ определяется в \n' +
                                               'зависимости от выбранных чего то там '}
                                           fontSize={'middle'}/>
                                <Accordion heading={`${day} Дней`}
                                           description={'Стоимость работ определяется в \n' +
                                               'зависимости от выбранных чего то там '}
                                           fontSize={'middle'}/>
                                <label className={styles.button} htmlFor='name_form'>
                                    {/*<TransprentButton text={'Заказать сайт'}/>*/}
                                    Заказать сайт
                                </label>

                                {/*<label className={styles.button} htmlFor='name_form'>*/}
                                {/*    Заказать сайт*/}
                                {/*</label>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.slide} ${styles.s2}`}>
                    <ServiceRequest sele_disabled/>
                </div>
            </div>


            {/*BACKGROUND*/}
            <div className={styles.back_l}>
                <BorderTarma/>
            </div>
            <div className={styles.back_r}>
                <BorderTarma/>
            </div>
            {/*BACKGROUND*/}

            <div className={styles.publications}>
                <div className={styles.text}>
                    <Accordion fontSize={'big'} heading={'Публикации'} description={'Посмотреть другие посты'} link
                               link_link={'/posts'}/>
                </div>

                <div className={styles.blogs} key={'blogs'}>
                    {data?.posts?.length > 0 ?
                        data.posts.slice(0, 3).map((item) => (
                            <ArticleItem name={item.title} description={item.description} views={item.views}
                                         time={item.createdAt}
                                         image={item.cover} id={item.id}
                                         type={'flexColumn'}/>
                        ))
                        : <Nothing/>}
                </div>
            </div>

            <div className={styles.projects}>
                <div className={styles.text}>
                    <Accordion fontSize={'big'} heading={'Проекты'} description={'Посмотреть другие работы'} link
                               link_link={'/cases'}/>
                </div>
                <div className={styles.grid} key={'content'}>
                    {data?.cases?.length > 0 ?
                        data.cases.slice(0, 5).map((item, index) => (
                            <div className={`${page[`grid${(index % 14) + 1}`]} ${styles.prod_content}`} key={item.id}>
                                <CaseItem key={item.id}
                                          id={item.id}
                                          name={item.name}
                                          image={item?.cover}
                                          price={item.price} click={false}/>
                            </div>
                        )) : <LoadingSceleton/>}
                    {/*t odo : Было сверху .slice(0,6)*/}
                </div>
            </div>
        </div>
    );
};

