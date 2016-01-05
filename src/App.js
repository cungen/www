import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Popover from 'material-ui/lib/popover/popover';
import RaisedButton from 'material-ui/lib/raised-button';
import TouchRipple from 'material-ui/lib/ripples/touch-ripple';
import NavigationApps from 'material-ui/lib/svg-icons/navigation/apps';
import SocialPerson from 'material-ui/lib/svg-icons/social/person';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import Colors from 'material-ui/lib/styles/colors';

import Editor from './editor/editor';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            activePopover: 'none',
            anchorEl: this.refs.menuButton
        };
    }

    render() {
        const styles = {
            content: {
                position: 'absolute',
                top: 64,
                right: 0,
                bottom: 0,
                left: 0
            },
            rightMenu: {
                paddingTop: 8
            },
            popMenu: {
                width: 256,
                padding: 20
            },
            popItem: {
                position: 'relative',
                width: '33.33%',
                height: 100,
                backgroundColor: Colors.green200
            }
        };
        const anchorOrigin = {
            horizontal: 'right',
            vertical: 'bottom'
        };
        const targetOrigin = {
            horizontal: 'right',
            vertical: 'top'
        };
        return (
            <div>
                <AppBar
                    title="App"
                    children={
                        <div style={styles.rightMenu}>
                            <IconButton
                                ref="menuButton"
                                onClick={this.show.bind(this, 'pop')}>
                                <NavigationApps color={Colors.white} />
                            </IconButton>
                            <Popover open={this.state.activePopover === 'pop'}
                                     anchorEl={this.state.anchorEl}
                                     anchorOrigin={anchorOrigin}
                                     targetOrigin={targetOrigin}
                                     onRequestClose={this.closePopover.bind(this, 'pop')} >
                                <div style={styles.popMenu}>
                                    <div style={styles.popItem}>
                                        <TouchRipple>
                                            <ActionHome />
                                            <p>Blabla</p>
                                        </TouchRipple>
                                    </div>
                                </div>
                            </Popover>
                            <IconMenu iconButtonElement={
                              <IconButton><SocialPerson color={Colors.white} /></IconButton>
                            }>
                              <MenuItem primaryText="Refresh" />
                              <MenuItem primaryText="Help" />
                              <MenuItem primaryText="Sign out" />
                            </IconMenu>
                        </div>
                    } />
                <div style={styles.content}>
                    {this.props.children}
                    <Editor />
                </div>
            </div>
        );
    }

    show(key, e) {
        this.setState({
            activePopover: this.state.activePopover === key ? 'none' : key,
            anchorEl: e.currentTarget
        });
    }

    closePopover(key) {
        if (this.state.activePopover !== key)
            return;
        this.setState({
            activePopover:'none'
        });
    }

}
