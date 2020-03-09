import React from 'react'
import style from './style.module.scss'

interface Props {
    name: string,
    img: string,
    citate: string
}

const User = (props: Props) => {
    return (
        <div className={style.User}>
            <img src={props.img} className={style.Img}/>
            <p>{props.name}</p>
            <blockquote>
            <p>{props.citate}</p>
                <cite>{props.name}</cite>
            </blockquote>
        </div>
    )
}

export default React.memo(User)