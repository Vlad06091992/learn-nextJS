"use client"
// import styles from "./page.module.css";
import {Metadata} from "next";
import {Htag} from "@/app/components";
import styles from './page.module.scss'
import {Button} from "@/app/components/Button/Button";
import {useState} from "react";

// export const metadata: Metadata = {
//   title: "Исправленные данные",
//   description: "Мой текст",
// };

// export async function generateMetadata():Promise<Metadata>{
//   return {
//     title: "Вычисленные данные",
//     description: "Мой текст",
//     //иконки лучше прямо ложить в файловую структуру, но можно и так указывать к ним пути, они приоритетне
//     icons:{
//       icon:'./icon.jpeg'
//     }
//   }
// }

export default function Home() {

    const [position, setPosition] = useState('left')

    debugger

  return (
      <>
        <Htag tag={"h2"} className={styles.hz}>Hello world</Htag>
        <Button mode={'primary'} arrow={position as any}>Опубликовать</Button>
        <Button mode={'outline'}>Читать отзывы</Button>
        <Button onClick={()=>setPosition(position === 'left' ? 'down' : 'left')} mode={'outline'} arrow={position as any}>Читать отзывы</Button>
      </>
  );
}
