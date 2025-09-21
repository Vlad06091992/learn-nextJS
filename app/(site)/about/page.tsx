// page.tsx → содержимое конкретного роута.
import styles from './page.module.scss'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About",
  description: "описание About",
};


export default function About() {

    return (
        <main className={styles.about}>
            О проекте
        </main>
    );
}
