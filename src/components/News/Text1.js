import React from 'react';
import * as serviceWorker from '../../serviceWorker'
import ph1 from './photo1.jpg';
import ph2 from './photo2.png';
import ph3 from './33.jpg';
import './Text.css'




function Text() {
    return (
        <div className='inner-contentt'>
            <div className="content">

                <div class="card-deck">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={ph3} class="card-img" alt="фото новости"></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Собянин продлил режим самоизоляции до 31 мая</h5>
                                <p class="card-text">Мэр Москвы Сергей Собянин подписал указ о продлении режима самоизоляции в городе до 31 мая включительно.</p>
                                <img src={ph2} class="calendar-img" alt="иконка календаря"></img>
                                <p class="calendar-text"><small class="text-muted">07 мая 2020, четверг 16:50</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-deck">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={ph1} class="card-img" alt="фото новости"></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Заголовок новости.</h5>
                                <p class="card-text">Основной текст новости.</p>
                                <img src={ph2} class="calendar-img" alt="иконка календаря"></img>
                                <p class="calendar-text"><small class="text-muted">28 апреля 2020, вторник 16:50</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Text;
serviceWorker.unregister();