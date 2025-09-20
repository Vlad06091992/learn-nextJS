"use client"

import React, { DetailedHTMLProps, HTMLAttributes, JSX, ReactNode, useEffect } from "react";
import cn from "classnames";
import styles from "./Rating.module.scss";
import Star from '../../assets/Star.svg'


interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: 1 | 2 | 3 | 4 | 5
    setRating?: (newValue: number) => void
    isEditable?: boolean
}

export const Rating = ({ rating, isEditable = false, setRating, ...restProps }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>))


    useEffect(() => {
        constructArray(rating)
    }, [rating])

    const changeDisplay = (value: number) => {
        if (isEditable) constructArray(value)
    }

    const onClickHandler = (value:number) => {
        if(isEditable) setRating?.(value + 1)
    }

    const constructArray = (currentRating: number) => {
        const updatedArray = ratingArray.map((r, i) => {
            debugger
            return (
                <Star
                    onClick={()=>onClickHandler(i)}
                    onMouseEnter={() => {changeDisplay(i + 1)}}
                    onMouseLeave={() => {
                        changeDisplay(rating)}}
                    key={i}
                    className={cn(styles.star, { [styles.filled]: i < currentRating, [styles.editable]: isEditable })}/>
            )

        })
        setRatingArray(updatedArray)
    }

    return <div {...restProps}>
        {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
}