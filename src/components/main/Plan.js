import './Plan.css'
import React from 'react'
import { PlanCard } from '../cards/PlanCard'
import lineImg from '../../img/line.png'
import br from 'react-newline-to-break'

export function Plan() {
    return (
        <section className='plan' id='plan'>
            <div className='plan__bg' />
            <div className='plan__slide' />
            <div className='container'>
                <div className='plan__inner'>
                    <div className='plan__header'>
                        <p className='plan__suptitle'>SOHALAR</p>
                        <h1 className='default-title plan__title'>TTS & STT tizimlarini o'rnatish reja sohalar</h1>
                        <img src={lineImg} alt='img'/>
                    </div>
                    <PlanCard
                        href='#!'
                        title={br('IOT &\n Robotech')}
                        icon='flaticon-chatbot'
                    />
                    <PlanCard
                        href='#!'
                        title={br('Media &\n Xizmatlar')}
                        icon='flaticon-social-media'
                    />
                    <PlanCard
                        href='#!'
                        title={br('Smart\n Yordamchilar')}
                        icon='flaticon-call-center'
                    />
                    <PlanCard
                        href='#!'
                        title={br("Ta'lim\n sohalari")}
                        icon='flaticon-school'
                    />
                    <PlanCard
                        href='#!'
                        title={br("Online\n dasturlar")}
                        icon='flaticon-live'
                    />
                    <PlanCard
                        href='#!'
                        title={br("Ovozli\n Tarjimonlar")}
                        icon='flaticon-voice-control'
                    />
                </div>
            </div>
        </section>
    )
}
