import c from './header.sass';
import React, { Component } from 'react';
import { assign } from 'lodash';
import ActionHome from 'material-ui/svg-icons/action/home';
import NavigationApps from 'material-ui/svg-icons/navigation/apps';

export default class Header extends Component {
    render() {
        return (
            <div className={c.root}>
                <div className={c.title}>Cungen</div>
                <div className={c.desc}>Watch & Learn</div>
                <ul className={c.ul}>
                    <li>
                        <ActionHome color='#FF563F' />
                    </li>
                    <li>about</li>
                    <li>articles</li>
                    <li>
                        <NavigationApps />
                    </li>
                </ul>
            </div>
        )
    }
}