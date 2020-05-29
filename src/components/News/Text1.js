import React from 'react';
import * as serviceWorker from '../../serviceWorker'
import ph1 from './photo1.jpg';
import ph2 from './photo2.png';
import ph3 from './33.jpg';
import './Text.css'


function Text() {
    return (
        <>
            <div className="news_wrap">


                <div className="block">
                    <div className="image">
                        <img src={ph1} className="card_img" alt="фото новости"></img>

                    </div>
                    <div className="content">
                        <h5 className="card-title">Открытие нового сайта музея!</h5>
                        <p className="card-text">Учащиеся 2 курса ИКТИБ реализовали проект "Сайт политехнического музея
                            ЮФУ".
                            Теперь каждый желающий может просмотреть экспонаты и узнать новости музея не выходя из
                            дома.</p>

                        <div className="image_date">
                            <img src={ph2} className="calendar-img" alt="иконка календаря"></img>
                            <p className="calendar-text"><small className="text-muted">20 мая 2020, среда
                                16:50</small></p>
                        </div>
                    </div>

                </div>


                <div className="block">
                    <div className="image">
                        <img src={ph3} className="card_img" alt="фото новости"></img>

                    </div>
                    <div className="content">
                        <h5 className="card-title">Защита творческих проектов ИКТИБ в прямом эфире!</h5>
                        <p className="card-text">Для подключения к просмотру защит студенческих проектов переходите по
                            ссылкам и ставьте напоминание о начале трансляции:
                            Начало в 09:00
                        </p>
                        <a href="https://www.youtube.com/watch?v=iIVB5lXn8W4" target="_blank">Ссылка на трансляцию</a>
                        <div className="image_date">
                            <img src={ph2} className="calendar-img" alt="иконка календаря"></img>
                            <p className="calendar-text"><small className="text-muted">28 мая 2020, пятница
                                9:00 </small></p>
                        </div>
                    </div>

                </div>


            </div>


        </>
    )
}

export default Text;
serviceWorker.unregister();