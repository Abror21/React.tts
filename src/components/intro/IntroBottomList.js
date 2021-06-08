import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'

export function IntroBottomList(props) {
    const { tts, makeTts, makeStt } = useContext(GlobalState)
    const handleChangeTts = () => {
        makeTts()
    }
    const handleChangeStt = () => {
        makeStt()
    }

    return (
        <ul className={`intro__bottom-list ${props.position}`}>
            <li className={tts ? 'intro__bottom-item hover': 'intro__bottom-item'} onClick={handleChangeTts}>TTS</li>
            <li className={tts ? 'intro__bottom-item': 'intro__bottom-item hover'} onClick={handleChangeStt}>STT</li>
        </ul>
    )
}