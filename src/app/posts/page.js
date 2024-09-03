
import PublicationsTitle from "@/components/publications/title/PublicationsTitle";
import styles from "../page.module.css";
import Data from "@/app/posts/Data";

export const metadata = {
    title: 'Посты',
    description: 'Посты Аймани',
}
export default function Page () {

    return (
        <div className={styles.main} >
            <PublicationsTitle small />
            <Data/>
        </div>
    )
};

