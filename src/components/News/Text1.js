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
                        <h5 className="card-title">Заголовок новости.</h5>
                        <p className="card-text">Мэр Москвы Сергей Собянин подписал указ о продлении режима
                            самоизоляции в городе до 31 мая включительно.</p>
                        <div className="image_date">
                            <img src={ph2} className="calendar-img" alt="иконка календаря"></img>
                            <p className="calendar-text"><small className="text-muted">28 апреля 2020, вторник
                                16:50</small></p>
                        </div>
                    </div>

                </div>


                <div className="block">
                    <div className="image">
                        <img src={ph3} className="card_img" alt="фото новости"></img>

                    </div>
                    <div className="content">
                        <h5 className="card-title">Собянин продлил режим самоизоляции до 31 мая</h5>
                        <p className="card-text">Мэр Москвы Сергей Собянин подписал указ о продлении режима
                            самоизоляции в городе до 31 мая включительно.</p>
                        <div className="image_date">
                            <img src={ph2} className="calendar-img" alt="иконка календаря"></img>
                            <p className="calendar-text"><small className="text-muted">07 мая 2020, четверг
                                16:50</small></p>
                        </div>
                    </div>

                </div>


            </div>


        </>
    )
}

export default Text;
serviceWorker.unregister();