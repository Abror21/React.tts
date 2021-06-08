import './Intro.css'
import { IntroTts } from './IntroTts'
import { IntroStt } from './IntroStt'
import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'

export function Intro() {
    const {tts} = useContext(GlobalState)
    
    return (
        <section className='intro' id='intro'>
            <div className='container'>
                <div className='intro__inner'>
                    {tts ? <IntroTts /> : <IntroStt />}
                </div>
            </div>
        </section>
    )
}