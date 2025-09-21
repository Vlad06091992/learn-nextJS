// "use client"
import styles from './page.module.scss'
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Login",
    description: "описание Login",
};


export default function Login() {

    return (
        <main className={styles.about}>
            Страница для логина
        </main>
    );
}
