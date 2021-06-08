import './Info.css'
import React from 'react'

export function Info() {
    return (
        <section className='info' id='info'>
            <div className='container'>
                <div className='info__inner'>
                    <div className='info__col'>
                        <i className='flaticon-group' />
                        <div className='info__col-info'>
                            <h3>150924</h3>
                            <h6>Foydalanuvchilar</h6>
                            <p>Botimizdan bugungacha foydalanib kelganlar foydalanuvchilar soni</p>
                        </div>
                    </div>
                    <div className='info__col'>
                        <i className='flaticon-voice-message' />
                        <div className='info__col-info'>
                            <h3>150924</h3>
                            <h6>Foydalanuvchilar</h6>
                            <p>Botimizdan bugungacha foydalanib kelganlar foydalanuvchilar soni</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
