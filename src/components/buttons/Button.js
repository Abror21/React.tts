import './Buttons.css'
import React from 'react'

export function Button(props) {
    return (
        <a className={`button ${props.class}`} href={props.href}>
            {props.children}
        </a>
    )
}
