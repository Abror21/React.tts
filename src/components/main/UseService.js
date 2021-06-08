import React from 'react'
import './UseService.css'
import lineImg from '../../img/line.png'
import { UseCard } from '../cards/UseCard'

export function UseService() {
    return (
        <section className='useservice' id='useservice'>
            <div className='container'>
                <div className='useservice__inner'>
                    <div className='useservice__header'>
                        <h1 className='default-title useservice__title'>
                            TTS.uz API xizmatidan foydalanish ketma-ketligi
                        </h1>
                        <img src={lineImg} alt='line' />
                    </div>
                    <div className='useservice__content'>
                        <UseCard
                            icon='flaticon-contract'
                            count='01'
                            link='Shartnoma'
                            text='tts.uz API xizmatidan foydalanish uchun shartnoma qilinadi'
                        />
                        <UseCard
                            icon="flaticon-tourist-tax"
                            count='02'
                            link="Tariflar & To'lovlar"
                            text="Shartnoma qilinganidan so'ng tarif tanlanadi"
                        />
                        <UseCard
                            icon="flaticon-computer"
                            count='03'
                            link="O'rnatish & Ishga tushirish"
                            text="Saytga o'rnatish uchun JavaScript plugin beriladi va ungan api token biriktirilib saytga o'rnatiladi"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
