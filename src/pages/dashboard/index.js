import React, { Component } from 'react';
import { watchUserChanges } from './../../services/firebase';
import './linetime.css';
/**
 * import {Animated} from "react-animated-css";
 */
watchUserChanges((user) => {
    console.log(user);
});
class Pages extends Component {
    render() {
        return (
         
            <div className="container">
                <div className="timeline">
                    <div className="timeline-event">
                        <div className="card timeline-content ">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt="prueba" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMuDUH65yScQXe3Gnhwwgrf8fYfXfdAqnxwaky9AvRbjZ4eVz&s" />
                            </div>
                            {/**contenido del cuerpo */}
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Ver ejemplo<i className="material-icons right">more_vert</i></span>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate" />
                                    <label htmlFor="last_name">Nombre quien dirige</label>
                                </div>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">quien dirige<i className="material-icons right">close</i></span>
                                <p> poner texto de ejemplo </p>
                            </div>
                        </div>
                        <div className="timeline-badge blue white-text item" >
                            1
                        </div>
                    </div>
                    {/**card 2 */}
                    <div className="timeline-event">
                        <div className="card timeline-content ">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt="prueba" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMuDUH65yScQXe3Gnhwwgrf8fYfXfdAqnxwaky9AvRbjZ4eVz&s" />
                            </div>
                            {/**contenido del cuerpo */}
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Ver ejemplo<i className="material-icons right">more_vert</i></span>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate" />
                                    <label htmlFor="last_name">Nombre quien dirige</label>
                                </div>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">quien dirige<i className="material-icons right">close</i></span>
                                <p> poner texto de ejemplo </p>
                            </div>
                        </div>
                        <div className="timeline-badge blue white-text item" >
                            2
                        </div>
                    </div>

                    {/**card 3 */}

                    <div className="timeline-event">
                        <div className="card timeline-content ">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt="prueba" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMuDUH65yScQXe3Gnhwwgrf8fYfXfdAqnxwaky9AvRbjZ4eVz&s" />
                            </div>
                            {/**contenido del cuerpo */}
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Ver ejemplo<i className="material-icons right">more_vert</i></span>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate" />
                                    <label htmlFor="last_name">Nombre quien dirige</label>
                                </div>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">quien dirige<i className="material-icons right">close</i></span>
                                <p> poner texto de ejemplo </p>
                            </div>
                        </div>
                        <div className="timeline-badge blue white-text item" >
                            3
                        </div>
                    </div>

                    {/**card 4 */}
                    <div className="timeline-event">
                        <div className="card timeline-content ">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt=" prueba" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMuDUH65yScQXe3Gnhwwgrf8fYfXfdAqnxwaky9AvRbjZ4eVz&s" />
                            </div>
                            {/**contenido del cuerpo */}
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Ver ejemplo<i className="material-icons right">more_vert</i></span>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate" />
                                    <label htmlFor="last_name">Nombre quien dirige</label>
                                </div>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">quien dirige<i className="material-icons right">close</i></span>
                                <p> poner texto de ejemplo </p>
                            </div>
                        </div>
                        <div className="timeline-badge blue white-text item" >
                            4
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Pages;