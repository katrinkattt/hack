import React from 'react';
import Toolbar from './Toolbar';
import CardBook from './CardBook';
// import Carusel from './Carusel';


export default class Main extends React.Component {
    render() {
        return (
            <div className="content">
                    <Toolbar />
                    {/* <div className="carus">
                        <Carusel />
                    </div> */}
                    <div className="cards__b">
                        <div className="big__block">
                            <CardBook />
                            <CardBook />
                            <CardBook />
                            <CardBook />
                        </div>
                    </div>
            </div>
        )
    }
}