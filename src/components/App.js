import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './partials/header/';

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}