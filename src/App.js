import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menus/menu-item';

import MoreVertIcon from 'material-ui/lib/svg-icons/action/swap-vert'
export default class App extends Component {
    render() {
        const styles = {
            content: {
                position: 'absolute',
                top: 64,
                right: 0,
                bottom: 0,
                left: 0
            }
        };
        return (
            <div>
                <AppBar
                    title="App"
                    iconElementRight={
                        <IconMenu iconButtonElement={
                          <IconButton><MoreVertIcon /></IconButton>
                        }>
                          <MenuItem primaryText="Refresh" />
                          <MenuItem primaryText="Help" />
                          <MenuItem primaryText="Sign out" />
                        </IconMenu>
                    } />
                <div style={styles.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
