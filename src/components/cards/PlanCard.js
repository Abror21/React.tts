import './PlanCard.css'
import React from 'react'

export function PlanCard(props) {
    return (
        <div className='plancard'>
            <div className='plancard__inner'>
                <h2 className='plancard__title'>
                    <a href={props.href}>{props.title}</a>
                </h2>
                <div className='plancard__icon'>
                    <i className={props.icon} />
                </div>
                <a className='plancard__arrow' href={props.href}>
                    <i className='flaticon-right' />
                </a>
                <div className='plancard__bg' />
            </div>
        </div>
    )
}
