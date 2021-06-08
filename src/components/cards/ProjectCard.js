import './ProjectCard.css'
import React from 'react'

export function ProjectCard(props) {

    return (
        <div className={`card ${props.class}`}>
            <h3 className='card__title'>
                <a href='#!'>{props.title}</a>
            </h3>
            <div className='card__img-wrapper'>
                <span className='card__img-border' />
                <i className={`card__icon ${props.img}`} />
            </div>
            <p className='card__text'>
                {props.text}
            </p>
        </div>
    )
}
