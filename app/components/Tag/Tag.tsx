import React, { DetailedHTMLProps, HTMLAttributes, JSX, ReactNode } from "react";
import cn from "classnames";
import styles from "./Tag.module.scss";

export enum TagSizes {
    S = 'small',
    M = 'medium',
}

export enum TagThemes {
    OUTLINED = 'outlined',
    PRIMARY = 'primary',
    GREY = 'grey',
    GREEN = 'green',
    RED = 'red',
}

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode
    size?: TagSizes
    theme?: TagThemes
    href?: string
}

export const Tag = (props: TagProps): JSX.Element => {
    const { children,href, className, size = TagSizes.S, theme = TagThemes.OUTLINED, ...restProps } = props

    return (
        <div className={cn(styles.tag, styles[size], styles[theme], className ?? '', { [styles.href]: !!href })} {...restProps}>
            {   href ? <a href={href} target="_blank">
                {children}
            </a> : <>{children}</>}
        </div>
    )
}