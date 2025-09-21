// "use client"
import styles from './page.module.scss'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "News",
  description: "описание News",
};


export default function News() {

    return (
        <main className={styles.about}>
            Новости
        </main>
    );
}
