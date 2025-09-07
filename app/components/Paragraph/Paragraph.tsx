import React, { DetailedHTMLProps, HTMLAttributes, JSX, ReactNode } from "react";
import cn from "classnames";
import styles from "./Paragraph.module.scss";

export enum ParagraphSizes {
    S='small',
    M = 'medium',
    l = 'large'
}
interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children?: ReactNode
    size?: ParagraphSizes
}

export const Paragraph = (props:ParagraphProps):JSX.Element =>{
    const { children,className,size=ParagraphSizes.S,  ...restProps } = props
    return <p className={cn(styles.p,styles[size] ,className ?? '')} {...restProps}>{children}

    </p>
}