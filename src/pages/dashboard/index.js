import React, { Component } from 'react';
import { watchUserChanges } from './../../services/firebase';
import { Animated } from 'react-animated-css';
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
            <div>
                <div className="timeline">
                    <div className="container left">
                        <div className="content">
                        <img  class="img" src="gs://document-ad406.appspot.com/1.png"/>
                            <h2>2017</h2>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                    <div className="container right">
                        <div className="content">
                            <h2>2016</h2>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pages;