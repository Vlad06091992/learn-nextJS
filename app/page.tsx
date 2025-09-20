"use client"
// import styles from "./page.module.css";
import { Htag, Rating } from "@/app/components";
import styles from './page.module.scss'
import { Button } from "@/app/components/Button/Button";
import Image from 'next/image'
import { Paragraph, ParagraphSizes } from "@/app/components/Paragraph/Paragraph";
import { Tag, TagThemes } from "@/app/components/Tag/Tag";
import { ButtonClientComponent } from "@/app/components/ButtonClientComponent/ButtonClientComponent";
import { useState } from 'react'


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

    // const [position, setPosition] = useState('left')
    const [rating, setRating] = useState<any>(1)

    debugger

  return (
      <>
          {/*/!*если нужно интерактивно/динамично менять SVG — используйте <File/>*!/*/}
          {/*<File/>*/}
         <Tag>Outlined</Tag>
         <Tag theme={TagThemes.GREEN}>Green</Tag>
         <Tag theme={TagThemes.GREY}>Grey</Tag>
         <Tag theme={TagThemes.RED}>Red</Tag>
         <Tag theme={TagThemes.PRIMARY}>Primary</Tag>
         <Tag theme={TagThemes.PRIMARY} href={'https://www.figma.com/design/eHIyKZXUUtMf1BQiuv6tTA/%D0%9A%D1%83%D1%80%D1%81-2---NextJS?node-id=0-1&p=f&t=FR1ytiBedUh1H0fE-0'}>Primary</Tag>
          <Paragraph size={ParagraphSizes.l}>Большой</Paragraph>
          <Paragraph size={ParagraphSizes.M}>Средний</Paragraph>
          <Paragraph size={ParagraphSizes.S}>Маленький</Paragraph>
          <Paragraph>123</Paragraph>
          {/*Если нужен просто статичный файл и важны кэш/размер бандла — используйте <Image> или обычный <img>*/}
          <Image src={'/file.svg'} alt='svg' width={'100'} height={'60'}/>
        <Htag tag={"h2"} className={styles.hz}>Hello world</Htag>
        <Button  mode={'primary'} arrow={'left'}>Опубликовать</Button>
        <Button mode={'outline'}>Читать отзывы</Button>
        <Button mode={'outline'} arrow={'down'}>Читать отзывы</Button>
          <ButtonClientComponent>Клиентская компонента</ButtonClientComponent>
          <Rating isEditable={true} setRating={setRating} rating={rating} />
      </>
  );
}
