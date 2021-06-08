import './Projects.css'
import React from 'react'
import lineImg from '../../img/line.png'
import { ProjectCard } from '../cards/ProjectCard'

export function Projects() {
    return (
        <section className='projects' id='projects'>
            <div className='container'>
                <div className='projects__inner'>
                    <div className='projects__header'>
                        <h1 className='default-title projects__title'>Loyihalar</h1>
                        <img src={lineImg} alt='projects_line' />
                    </div>
                    <div className='projects__content'>
                        <ProjectCard
                            title="O'zbekcha sintezator"
                            img="flaticon-data"
                            text="Tabiiy ovozga asoslangan o'zbekcha nutq sintezatori"
                        />
                        <ProjectCard
                            title="@ttsuzbot Telegram boti"
                            img="flaticon-bot"
                            text="Sintezator yordamida turli matnlarni ovozga o'girib foydalanish mumkin"
                        />
                        <ProjectCard
                            title="uzNutq & uzNutq sintezator"
                            img="flaticon-voice-control"
                            text="uzNutq & uzNutq sintezator
                            Ko'zi ojizlarga kompyuterdan foydalanish imkoniyatini taminlab beradi"
                        />
                        <ProjectCard
                            title="TTS.uz API"
                            img="flaticon-api"
                            text="TTS.uz API
                            web sahifalardan imkoniyati cheklanganlar ham foydalana olishi uchun api tizimi"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
