// import { JSDOM } from 'jsdom';
export const IMAGE_URL = 'http://192.168.1.121:5000';

// export function parseHtml(html) {
//     const { document } = new JSDOM(html).window;
//     return document.body.innerHTML;
// }
export function timeAgo(input) {
    const date = (input instanceof Date) ? input : new Date(input);
    const formatter = new Intl.RelativeTimeFormat('ru');
    const ranges = {
        years: 3600 * 24 * 365,
        months: 3600 * 24 * 30,
        weeks: 3600 * 24 * 7,
        days: 3600 * 24,
        hours: 3600,
        minutes: 60,
        seconds: 1
    };
    const secondsElapsed = (date.getTime() - Date.now()) / 1000;

    for (let key in ranges) {
        if (ranges[key] < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / ranges[key];
            return formatter.format(Math.round(delta), key);
        }
    }
}