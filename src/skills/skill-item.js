import React, { Component } from 'react';

import Colors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ListDivider from 'material-ui/lib/lists/list-divider';
import IconButton from 'material-ui/lib/icon-button';

export default class SkillList extends Component {
    render() {
        const styles = {
            fullscreen: {
                position: 'absolute',
                right: 0,
                top: 0
            },
            card: {
                position: 'relative',
                width: 256,
                margin: 16
            }
        };

        return (
            <Paper zDepth={1} style={styles.card}>
            </Paper>
        );
    }
}
