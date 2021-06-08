import './Header.css'
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../buttons/Button'
import { GlobalState } from '../../GlobalState'

export function Header() {
    const {menu, activeMenu, inActiveMenu} = useContext(GlobalState)
    
    const menuActive = () => {
        activeMenu()
    }
    const closeMenu = () => {
        inActiveMenu()
    }
    
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <a className='header__logo' href='#intro'>
                        TTS<span>.uz</span>
                    </a>
                    <div className='header__nav'>
                        <ul className={`nav__list ${menu ? 'active' : ''}`}>
                            <span className='menu-close' onClick={closeMenu}>
                                <i className='flaticon-cancel' />
                            </span>
                            <li className='nav__item'>
                                <a className='nav__link' href='#intro' onClick={closeMenu}>Bosh sahifa</a>
                            </li>
                            <li className='nav__item'>
                                <a className='nav__link' href='#projects' onClick={closeMenu}>Loyihalar</a>
                            </li>
                            <li className='nav__item'>
                                <a className='nav__link' href='#useservice' onClick={closeMenu}>API</a>
                            </li>
                            <li className='nav__item'>
                                <a className='nav__link' href='#plan' onClick={closeMenu}>Sohalar</a>
                            </li>
                            <li className='nav__item'>
                                <a className='nav__link' href='#info' onClick={closeMenu}>Statistika</a>
                            </li>
                        </ul>
                        <Button class='header__btn' href='mailto:contact@tts.uz'>Aloqa uchun</Button>
                        <span className='header__menu' onClick={menuActive}>
                            <i className='flaticon-menu' />
                        </span>
                    </div>
                </div>
            </div>
            <div className={`bodywrapper ${menu ? 'active' : ''}`} onClick={closeMenu}/>
        </header>
    )
}
