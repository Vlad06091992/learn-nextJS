"use client"

import React, { ButtonHTMLAttributes, DetailedHTMLProps, JSX, ReactNode, useState } from "react";
import styles from './ButtonClientComponent.module.scss'
import cn from "classnames";


// в эту конструкцию сначала передает общие атрибуиты для элемента если они есть,в данном случае- ButtonHTMLAttributes
// а затем типы для самого элемента, в данном случае - HTMLButtonElement
interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    mode?: 'primary' | 'outline'
    children?: ReactNode
    arrow?: 'left' | 'down' | 'none'
}

export const ButtonClientComponent = (props: ButtonProps): JSX.Element => {
    const { children, className, mode = 'primary', arrow = 'none', ...restProps } = props
    const [counter, setCounter] = useState(0)
    return <button onClick={() => {
        setCounter(counter + 1);
        console.debug('click')
    }} className={cn(styles.button, styles[mode], className ?? '')} {...restProps}>{children}
        <div>
            {counter}
        </div>
    </button>
}
