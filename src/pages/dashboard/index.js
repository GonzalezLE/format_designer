import React, { Component } from 'react';
import { watchUserChanges } from './../../services/firebase';
import './linetime.css';
import ItemLine from './../timeline_item';
/**
 * import {Animated} from "react-animated-css";
 */
watchUserChanges((user) => {
    console.log(user);
});
class Pages extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    render() {
        return (
            <div className="container">
                <div className="timeline">
                    <ItemLine
                    paso="1"
                    />

                    <ItemLine
                    paso="2"
                    />
                    
                </div>
            </div>

        );
    }
}

export default Pages;