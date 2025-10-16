// "use client"
// import styles from "./page.module.css";
import styles from '../page.module.scss'
import { Metadata } from "next";
import {ClientComponent} from "@/app/components/ClientComponent/ClientComponent";


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
          app name: {process.env.APP_NAME}
          <br/>
          my secret: {process.env.SECRET}
          <br/>
          public client: {process.env.NEXT_PUBLIC_CLIENT}
          <br/>
          client: {process.env.CLIENT}
          -----------------------------------
          <ClientComponent/>
      </main>
  );
}
