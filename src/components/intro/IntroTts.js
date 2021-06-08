import './Intro.css'
import React from 'react'
import lineImg from '../../img/line.png'
import introImg from '../../img/intro-img.png'
import { IntroBottomList } from './IntroBottomList'

export function IntroTts() {

    return (
        <div className={`intro__inner-tts`}>
            <div className={`intro__left ${''}`}>
                <h1 className='default-title'>Matnni ovozga o'girish</h1>
                <img className='intro__line' src={lineImg} alt='img' />
                <p className='intro__text'>
                    21-oktabr, O'zbek tiliga davlat tili maqomi berilganligining 31 yilligi munosabati bilan o'zbekcha matnni nutqga o'girish texnologiyasini ishlab chiqdik
                </p>
                <ul className='intro__list'>
                    <li className='intro__list-item'>
                        <span className='intro__list-dot'></span>
                                Tabiiy ovozda
                    </li>
                    <li className='intro__list-item'>
                        <span className='intro__list-dot'></span>
                                Yuqori tezlik
                    </li>
                    <li className='intro__list-item'>
                        <span className='intro__list-dot'></span>
                                To'liq sun'iy intelekt asosida
                    </li>
                    <li className='intro__list-item'>
                        <span className='intro__list-dot'></span>
                                2ta ovozda tinglash imkoniyati
                    </li>
                </ul>
            </div>
            <div className={`intro__right ${''}`}>
                <div className='intro__right-inner'>
                    <img className='intro__right-img' src={introImg} alt='img' />
                    <IntroBottomList position='top' />
                </div>
            </div>
        </div>
    )
}
