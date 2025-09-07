// "use client"
// import styles from "./page.module.css";
import { Htag } from "@/app/components";
import styles from './page.module.scss'
import { Button } from "@/app/components/Button/Button";
import File from '../public/file.svg'
import Image from 'next/image'
import { Paragraph, ParagraphSizes } from "@/app/components/Paragraph/Paragraph";
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

    debugger

  return (
      <>
          {/*если нужно интерактивно/динамично менять SVG — используйте <File/>*/}
          <File/>
          <Paragraph size={ParagraphSizes.l}>Большой</Paragraph>
          <Paragraph size={ParagraphSizes.M}>Средний</Paragraph>
          <Paragraph size={ParagraphSizes.S}>Маленький</Paragraph>
          <Paragraph>123</Paragraph>
          {/*Если нужен просто статичный файл и важны кэш/размер бандла — используйте <Image> или обычный <img>*/}
          <Image src={'/file.svg'} alt='svg' width={'100'} height={'60'}/>
        <Htag tag={"h2"} className={styles.hz}>Hello world</Htag>
        <Button mode={'primary'} arrow={'left'}>Опубликовать</Button>
        <Button mode={'outline'}>Читать отзывы</Button>
        <Button mode={'outline'} arrow={'down'}>Читать отзывы</Button>
      </>
  );
}
