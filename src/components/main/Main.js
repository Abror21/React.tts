import React from 'react'
import { Info } from './Info'
import { Plan } from './Plan'
import { Projects } from './Projects'
import { UseService } from './UseService'

export function Main() {
    return (
        <>
            <Projects />
            <UseService />
            <Plan />
            <Info />
        </>
    )
}
