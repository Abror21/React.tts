import './Intro.css'
import React from 'react'
import lineImg from '../../img/line.png'
import introImg2 from '../../img/intro-img2.png'
import { IntroBottomList } from './IntroBottomList'

export function IntroStt() {

    return (
        <div className={`intro__inner-stt`}>
            <div className={`intro__left`}>
                <h1 className='default-title'>Ovozni matnga o'girish</h1>
                <img className='intro__line' src={lineImg} alt='img' />
                <p className='intro__text'>
                    Tez kunda...
                </p>
            </div>
            <div className={`intro__right`}>
                <div className='intro__right-inner'>
                    <img className='intro__right-img' src={introImg2} alt='img' />
                    <IntroBottomList position='bottom' />
                </div>
            </div>
        </div>
    )
}
