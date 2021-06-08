import './Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'
import lineImg from '../../img/line.png'
import { Button } from '../buttons/Button'

export function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className='container'>
                    <div className='footer__top-inner'>
                        <div className='footer__top-col footer__contact'>
                            <h3 className='footer__title'>Biz bilan bog'lanish</h3>
                            <img className='footer__line' src={lineImg} alt='Line' />
                            <div className='footer__contact-wrapper'>
                                <span>e-mail</span>
                                <a className='footer__contact-link' href='mailto:contact@tts.uz'>
                                    <i className='flaticon-envelope' /> contact@tts.uz
                                </a>
                            </div>
                        </div>
                        <div className='footer__top-col footer__links'>
                            <h3 className='footer__title'>Foydali linklar</h3>
                            <img className='footer__line' src={lineImg} alt='Line' />
                            <ul className='footer__links-list'>
                                <li className='footer__links-item'>
                                    <a className='footer__link' href='#intro'>Bosh sahifa</a>
                                </li>
                                <li className='footer__links-item'>
                                    <a className='footer__link' href='#useservice'>API</a>
                                </li>
                                <li className='footer__links-item'>
                                    <a className='footer__link' href='#info'>Statistika</a>
                                </li>
                                <li className='footer__links-item'>
                                    <a className='footer__link' href='#projects'> Loyihalar</a>
                                </li>
                                <li className='footer__links-item'>
                                    <a className='footer__link' href='#plan'> Sohalar</a>
                                </li>
                            </ul>
                        </div>
                        <div className='footer__top-col footer__about'>
                            <h3 className='footer__title'>Kompaniya haqida</h3>
                            <img className='footer__line' src={lineImg} alt='Line' />
                            <div className='footer__about-inner'>
                                <div className='footer__about-content'>
                                    <a className='footer__logo' href='#intro'>TTS<span>.uz</span></a>
                                    <p>Ovoz va Ovoz atrofidagi loyihalar ustida ish olib boramiz</p>
                                </div>
                                <Button href='https://t.me/ttsuzbekistan'>Telegramda ham kuzating!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer__bottom'>
                <div className='container'>
                    <div className='footer__bottom-inner'>
                        <p className='footer__bottom-copyright'>Copyright © <Link to='/#!'>TTS Uzbekistan,</Link> Barcha huquqlar himoyalangan.</p>
                        <p className='footer__bottom-links wow fadeInDown'>
                            <Link to='/#!'>Maxfiylik siyosati</Link>
                            <Link to='/#!'> - Foydalanish shartlari</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
