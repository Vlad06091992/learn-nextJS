// "use client"
import styles from './page.module.scss'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Team",
  description: "описание Team",
};


export default function Team() {

    return (
        <main className={styles.about}>
            Наша команда
        </main>
    );
}
