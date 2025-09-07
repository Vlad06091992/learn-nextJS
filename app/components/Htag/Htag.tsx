import React, { JSX, ReactNode } from "react";
import styles from './Htag.module.scss'
import cn from "classnames";

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HtagProps {
    tag:Tags
    children:ReactNode
    className?: string;
}

export const Htag = (props:HtagProps):JSX.Element =>{
    const { tag,children,className } = props
    const Component = tag
    return <Component className={cn(styles[tag], className ?? '')}>{children}</Component>
}
