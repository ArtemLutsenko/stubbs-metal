import React from 'react'
import './OurCompany.scss'
import blockBg1 from '../../assets/img/our-company1.jpg'
import blockBg2 from '../../assets/img/our-company2.jpg'

export const OurCompany = () => {
    return (
        <section className="our-company" id="our-company">
            <h2 className="h2-style">Наша компания</h2>
            <div className="our-company__container " style={{backgroundImage: `url(${blockBg1})`}}>
                <div className="our-company__container-text left">
                    <h3>Почему мы?</h3>
                    <p>Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного </p>
                </div>
            </div>
            <div className="our-company__container " style={{backgroundImage: `url(${blockBg2})`}}>
                <div className="our-company__container-text right">
                    <h3>Наши преимущества</h3>
                    <p>Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного </p>
                </div>
            </div>
        </section>
    )
}
