
import PublicationsTitle from "@/components/publications/title/PublicationsTitle";
import page from "./page.module.css";
import styles from "../page.module.css";
import ArticleItem from "@/components/article_item/article_item";

export const metadata = {
    title: 'Посты',
    description: 'Посты Аймани',
}
export default function Page () {


    const data = []

    for (let i = 1; i < 62; ++i) {
        data.push({
            key: i.toString(),
            name: i.toString() + ' product',
            price: Math.floor(Math.random() * 120000)
        });
    }
    const flexRow = [2, 3, 6, 7, 8, 10, 11, 14];
    const flexColumn = [4, 12];
    const without = [5, 13];
    // const full = [1, 9];

    return (
        <div className={styles.main} >
            <PublicationsTitle small />
            <main className={page.grid}>
                {data.map((item, index) => (
                    <div className={`${page[`grid${(index % 14) + 1}`]}`} >
                        {/*<CaseItem name={item.name}  />*/}
                        <ArticleItem name={`${index} + 'title`}
                                     type={flexRow.includes((index % 14) + 1) ? 'flexRow' : flexColumn.includes((index % 14) + 1) ? 'flexColumn'
                                         : without.includes((index % 14) + 1) ? 'withoutImage' : 'full' }/>
                    </div>
                ))}
            </main>
        </div>
    )
};

