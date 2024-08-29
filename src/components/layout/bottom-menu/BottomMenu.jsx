'use client'
import React, {useContext} from 'react';

import './bottom-menu.css'
import {useRouter} from "next/navigation";
import {ThemeContext} from "@/contexts/ThemeContext";

export default function BottomMenu() {

    const router = useRouter()
    const { toggle } = useContext(ThemeContext)

    return (
        <section className="section">
            <label title="home" htmlFor="home" className="label" onClick={() => router.push('/')}>
                <input id="home" name="page" type="radio"/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21 20"
                    height="22"
                    width="22"
                    className="icon home"
                >
                    <path
                        fill="inherit"
                        d="M18.9999 6.01002L12.4499 0.770018C11.1699 -0.249982 9.16988 -0.259982 7.89988 0.760018L1.34988 6.01002C0.409885 6.76002 -0.160115 8.26002 0.0398848 9.44002L1.29988 16.98C1.58988 18.67 3.15988 20 4.86988 20H15.4699C17.1599 20 18.7599 18.64 19.0499 16.97L20.3099 9.43002C20.4899 8.26002 19.9199 6.76002 18.9999 6.01002ZM10.9199 16C10.9199 16.41 10.5799 16.75 10.1699 16.75C9.75988 16.75 9.41988 16.41 9.41988 16V13C9.41988 12.59 9.75988 12.25 10.1699 12.25C10.5799 12.25 10.9199 12.59 10.9199 13V16Z"
                    ></path>
                </svg>
            </label>
            <label title="favorite" htmlFor="favorite" className="label" onClick={() => router.push('/posts')}>
                <input id="favorite" name="page" type="radio"/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="inherit"
                    // filter="black"
                    viewBox="0 0 24 20"
                    height="24"
                    width="24"
                    className="icon book"
                >
                    <path fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.00174 9H19.9983C19.9862 6.82497 19.8897 5.64706 19.1213 4.87868C18.2426 4 16.8284 4 14 4H10C7.17157 4 5.75736 4 4.87868 4.87868C4.1103 5.64706 4.01384 6.82497 4.00174 9ZM20 11H4V14C4 16.8284 4 18.2426 4.87868 19.1213C5.75736 20 7.17157 20 10 20H14C16.8284 20 18.2426 20 19.1213 19.1213C20 18.2426 20 16.8284 20 14V11Z"
                          fill="var(--col-darkGray)"
                            id="col"
                    />

                    {/*<rect x="0" y="0" width="24" height="24" rx="6" stroke="transparent"/>*/}
                    {/*<path d="M1 10L23 10" stroke="var(--base-color)" strokeLinecap="round"/>*/}
                </svg>
            </label>
            <label title="notifications" htmlFor="notifications" className="label" onClick={() => router.push('/cases')}>
                <input id="notifications" name="page" type="radio"/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="inherit"
                    viewBox="0 0 22 24"
                    height="28"
                    width="28"
                    className="icon history"
                >
                    <path d="M22 10.32C22 9.25914 21.5786 8.24172 20.8284 7.49158C20.0783 6.74143 19.0609 6.32001 18 6.32001H6C4.93913 6.32001 3.92178 6.74143 3.17163 7.49158C2.42149 8.24172 2 9.25914 2 10.32"
                          fill="var(--col-darkGray)"
                          id='col'
                          stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 10.32C15.91 16.32 8.09 16.32 2 10.32"
                          fill="var(--col-darkGray)"
                          id='col'
                          stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.9999 10.32L20.9999 18.32C20.8507 19.4088 20.3192 20.4089 19.5002 21.1417C18.6813 21.8745 17.6285 22.2922 16.5299 22.32H7.38989C6.29132 22.2922 5.23847 21.8745 4.41956 21.1417C3.60064 20.4089 3.0691 19.4088 2.91992 18.32L1.91992 10.32"
                          fill="var(--col-darkGray)"
                          id='col'
                          stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.00977 6.03998C8.00977 4.97911 8.43119 3.96169 9.18134 3.21155C9.93148 2.4614 10.9489 2.03998 12.0098 2.03998C13.0706 2.03998 14.0881 2.4614 14.8382 3.21155C15.5883 3.96169 16.0098 4.97911 16.0098 6.03998"
                          fill="transparent"
                          id='col2'
                          stroke="var(--col-darkGray)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </label>
            <div title="cart"  className="label" onClick={() => toggle()} >
                {/*<input id="cart" name="page" type="radio"/>*/}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg"
                     className="icon theme">
                    <path
                        d="M12,24 C18.6274547,24 24,18.6274547 24,12 C24,5.37254525 18.6274547,0 12,0 C5.37254525,0 0,5.37254525 0,12 C0,18.6274547 5.37254525,24 12,24 Z M12,22 L12,2 C16.9706013,2 21,6.02939872 21,12 C21,17.9706013 16.9706013,22 12,22 Z"
                        fill="inherit">
                    </path>
                </svg>
            </div>
        </section>
    );
};

