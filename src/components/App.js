import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './partials/header/';
import Loading from './loading/loading';

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    <Loading />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}