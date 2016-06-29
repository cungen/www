import c from './header.sass';
import React, { Component } from 'react';
import { assign } from 'lodash';

export default class Header extends Component {
    render() {
        return (
            <div className={c.root}>
                <div className={c.title}>Cungen</div>
                <div className={c.desc}>Watch & Learn</div>
                <ul className={c.nav}>
                    <li><a href="">home</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">articles</a></li>
                </ul>
            </div>
        )
    }
}