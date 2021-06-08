import './UseCard.css'
import React from 'react'


export function UseCard(props) {
    return (
        <div className={`usecard ${props.class}`}>
            <div className='usecard__inner'>
                <div className='usecard__img'>
                    <i className={props.icon} />
                    <span className='usecard__count'>{props.count}</span>
                </div>
                <h3 className='usecard__title'>
                    <a href='#!'>{props.link}</a>
                </h3>
                <p className='usecard__text'>{props.text}</p>
            </div>
        </div>
    )
}