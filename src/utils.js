// import { JSDOM } from 'jsdom';
export const IMAGE_URL = 'https://api.aimani.org';

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

export async function fetchTags() {
    const response = await fetch(`${IMAGE_URL}/api/post/getTags`, {
        cache: "no-store"
    })
    if (!response.ok) {
        return [];
    }
    return response.json();
}

export function getImageTypes(imageName) {
    const imageEnd = imageName.split('.')[1]
    if (imageEnd === 'png') return 'image/png'
    else if (imageEnd === 'jpg' || imageEnd === 'jpeg' || imageEnd === 'jfif' || imageEnd === 'pjpeg' || imageEnd === 'pjp') return 'image/jpeg'
    else if (imageEnd === 'webp') return 'image/webp'
    else if (imageEnd === 'svg') return 'image/svg+xml'
    else if (imageEnd === 'png' || imageEnd === 'apng') return 'image/apng'
    else if (imageEnd === 'avif') return 'image/avif'
    else if (imageEnd === 'gif') return 'image/gif'
}