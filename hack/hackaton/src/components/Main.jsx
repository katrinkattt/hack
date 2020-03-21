import React from 'react';
import Toolbar from './Toolbar';
import CardBook from './CardBook';
// import Carusel from './Carusel';
import chuzak from '../media/chuzak.jpg';
import daySavely from '../media/daySavely.jpg';
import dnevnSl from '../media/dnevnSl.jpg';
import futurama from '../media/futurama.jpg';
import poslZelan from '../media/poslZelan.jpg';



export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            curId: 0
        }
        this.bookState = [
                {
                    "name": "Последнее желание. Меч предназначения",
                    "autor": "Сапковский А.",
                    "about": "Новеллы о ведьмаке Геральте из Ривии, его друзьях и недругах, о смертельно опасной его 'работе' по истреблению.",
                    "img": poslZelan
                },
                {
                    "name": "Футурама-о-рама",
                    "autor": "Грейнинг М.",
                    "about": "Готовьтесь, фанаты Мэтта Грейнинга, грядет 'Футурама-о-рама' — первый сборник комиксов, основанных на мультсериале..",
                    "img": futurama
                },
                {
                    "name": "Чужак",
                    "autor": "Кинг С.",
                    "about": "В парке маленького городка Флинт-Сити найден труп жестоко убитого одиннадцатилетнего мальчика. Все улики, показания...",
                    "img": chuzak
                },
                {
                    "name": "Дни Савелия",
                    "autor": "Служитель Г.М.",
                    "about": "Григорий Служитель родился в 1983 г. в Москве. Закончил режиссерский факультет ГИТИСа (мастерская Сергея Женовача),...",
                    "img": daySavely
                },
                {
                    "name": "Чужак",
                    "autor": "Кинг С.",
                    "about": "В парке маленького городка Флинт-Сити найден труп жестоко убитого одиннадцатилетнего мальчика. Все улики, показания...",
                    "img": chuzak
                },
                {
                    "name": "Дневник Слабака",
                    "autor": "Кинни Джефф",
                    "about": "Кого из нас, когда мы были детьми, не ругали и не пророчили: «Ничего у тебя не выйдет!» Но вот в итоге всё становится..",
                    "img": dnevnSl
                },
            ];
        
    }
    render() {
        return (
            <div className="content">
                    <Toolbar />
                    {/* <div className="carus">
                        <Carusel />
                    </div> */}
                    <div className="container">
                    <div className="cards__b">
                        <div className="big__block">
                            {
                                this.bookState.map(type => {
                                    return(
                                        <CardBook
                                        name={type.name}
                                        autor={type.autor}
                                        about={type.about}
                                        img={type.img}

                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}