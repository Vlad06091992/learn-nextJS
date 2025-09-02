import React, {ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps, JSX, ReactNode} from "react";
import styles from './Butoon.module.scss'
import RightArrow from '../../assets/RightArrow.svg'
import cn from "classnames";


// в эту конструкцию сначала передает общие атрибуиты для элемента если они есть,в данном случае- ButtonHTMLAttributes
// а затем типы для самого элемента, в данном случае - HTMLButtonElement
interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    mode?:'primary' | 'outline'
    children?: ReactNode
    arrow?: 'left' | 'down' | 'none'
}

export const Button = (props:ButtonProps):JSX.Element =>{
    const {children,className,mode = 'primary', arrow = 'none',  ...restProps} = props
    return <button className={cn(styles.button,styles[mode] ,className ?? '')} {...restProps}>{children}
        {arrow != 'none' &&
            <div className={cn(styles.arrow, (arrow === 'down' ? styles.down : ''))}>
            <RightArrow/>
            </div>
        }


    </button>
}
