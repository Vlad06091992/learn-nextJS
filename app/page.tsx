// "use client"
// import styles from "./page.module.css";
import styles from './page.module.scss'
import { Metadata } from "next";


// export const metadata: Metadata = {
//   title: "Исправленные данные",
//   description: "Мой текст",
// };

export async function generateMetadata():Promise<Metadata>{
  return {
    title: "Вычисленные данные",
    description: "Мой текст",
    //иконки лучше прямо ложить в файловую структуру, но можно и так указывать к ним пути, они приоритетне
    icons:{
      icon:'./icon.jpeg'
    }
  }
}

export default function Home() {

    return (
      <main className={styles.main}>
          Главная страница
      </main>
  );
}
