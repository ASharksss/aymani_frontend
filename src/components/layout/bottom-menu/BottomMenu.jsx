'use client'
import React from 'react';

import './bottom-menu.css'

export default function BottomMenu() {
    return (
        <section className="section">
            <label title="home" htmlFor="home" className="label">
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
            <label title="favorite" htmlFor="favorite" className="label">
                <input id="favorite" name="page" type="radio"/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="inherit"
                    // filter="black"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    className="icon book"
                >
                    <path d="M7 22C5.93913 22 4.92178 21.5785 4.17163 20.8284C3.42149 20.0782 3 19.0609 3 18C3 16.9391 3.42149 15.9217 4.17163 15.1715C4.92178 14.4214 5.93913 14 7 14"
                          fill="inherit"
                          stroke="inherit" strokeWidth="1.5"  strokeLinecap="round" />
                    <path d="M7 2C5.93913 2 4.92178 2.42136 4.17163 3.17151C3.42149 3.92165 3 4.93913 3 6V18"
                          fill="inherit"
                          stroke="inherit" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M7 2H19C19.5304 2 20.0392 2.21074 20.4142 2.58582C20.7893 2.96089 21 3.46957 21 4V16"
                          fill="inherit"
                          stroke="inherit" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M7 14H19C19.5304 14 20.0392 14.2107 20.4142 14.5858C20.7893 14.9609 21 15.4696 21 16V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0392 21.7893 19.5304 22 19 22H7"
                          fill="inherit"
                          stroke="inherit" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </label>
            <label title="notifications" htmlFor="notifications" className="label">
                <input id="notifications" name="page" type="radio"/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="inherit"
                    viewBox="0 0 16 20"
                    height="20"
                    width="16"
                    className="icon history"
                >
                    <path
                        fill="inherit"
                        d="M15.0294 12.4902L14.0294 10.8302C13.8194 10.4602 13.6294 9.76016 13.6294 9.35016V6.82016C13.6282 5.70419 13.3111 4.61137 12.7147 3.66813C12.1183 2.72489 11.267 1.96978 10.2594 1.49016C10.0022 1.0335 9.62709 0.654303 9.17324 0.392195C8.71939 0.130087 8.20347 -0.00530784 7.6794 0.000159243C6.5894 0.000159243 5.6094 0.590159 5.0894 1.52016C3.1394 2.49016 1.7894 4.50016 1.7894 6.82016V9.35016C1.7894 9.76016 1.5994 10.4602 1.3894 10.8202L0.379396 12.4902C-0.0206039 13.1602 -0.110604 13.9002 0.139396 14.5802C0.379396 15.2502 0.949396 15.7702 1.6894 16.0202C3.6294 16.6802 5.6694 17.0002 7.7094 17.0002C9.7494 17.0002 11.7894 16.6802 13.7294 16.0302C14.4294 15.8002 14.9694 15.2702 15.2294 14.5802C15.4894 13.8902 15.4194 13.1302 15.0294 12.4902ZM10.5194 18.0102C10.3091 18.5923 9.92467 19.0956 9.41835 19.4516C8.91203 19.8077 8.30837 19.9992 7.6894 20.0002C6.8994 20.0002 6.1194 19.6802 5.5694 19.1102C5.2494 18.8102 5.0094 18.4102 4.8694 18.0002C4.9994 18.0202 5.1294 18.0302 5.2694 18.0502C5.4994 18.0802 5.7394 18.1102 5.9794 18.1302C6.5494 18.1802 7.1294 18.2102 7.7094 18.2102C8.2794 18.2102 8.8494 18.1802 9.4094 18.1302C9.6194 18.1102 9.8294 18.1002 10.0294 18.0702L10.5194 18.0102Z"
                    ></path>
                </svg>
            </label>
            <label title="cart" htmlFor="cart" className="label">
                <input id="cart" name="page" type="radio"/>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg"
                     className="icon theme">
                    <path
                        d="M12,24 C18.6274547,24 24,18.6274547 24,12 C24,5.37254525 18.6274547,0 12,0 C5.37254525,0 0,5.37254525 0,12 C0,18.6274547 5.37254525,24 12,24 Z M12,22 L12,2 C16.9706013,2 21,6.02939872 21,12 C21,17.9706013 16.9706013,22 12,22 Z"
                        fill="inherit">
                    </path>
                </svg>
            </label>
        </section>
    );
};

