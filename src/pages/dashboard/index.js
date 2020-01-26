import React, { Component } from 'react';
import {watchUserChanges} from './../../services/firebase';

watchUserChanges((user)=>{
    console.log(user);
});
class Pages extends Component {
    render() {
        return (
            <div>
                <h1>Hola mundo</h1>
                <p>soy un componente de react</p>
                   
            </div>
        );
    }
}

export default Pages;