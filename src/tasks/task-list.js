import React, { Component } from 'react';

import Colors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ListDivider from 'material-ui/lib/lists/list-divider';
import IconButton from 'material-ui/lib/icon-button';

import Avatar from 'material-ui/lib/avatar';
import ActionAssignment from 'material-ui/lib/svg-icons/action/assignment';
import Warning from 'material-ui/lib/svg-icons/alert/error';
import Fullscreen from 'material-ui/lib/svg-icons/navigation/fullscreen';

export default class TaskList extends Component {
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
                <IconButton style={styles.fullscreen}><Fullscreen /></IconButton>
                <List subheader="Today">
                    <ListDivider />
                    <ListItem
                        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={Colors.orange200} />}
                        rightIcon={<Warning />}
                        primaryText="Brendan Lim"
                        secondaryText='I&apos;ll be in your neighborhood doing' />
                    <ListItem
                        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={Colors.orange200} />}
                        rightIcon={<Warning />}
                        primaryText="Brendan Lim"
                        secondaryText='I&apos;ll be in your neighborhood doing' />
                    <ListItem
                        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={Colors.orange200} />}
                        rightIcon={<Warning />}
                        primaryText="Brendan Lim"
                        secondaryText='I&apos;ll be in your neighborhood doing' />
                    <ListItem
                        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={Colors.orange200} />}
                        rightIcon={<Warning />}
                        primaryText="Brendan Lim"
                        secondaryText='I&apos;ll be in your neighborhood doing' />
                </List>
            </Paper>
        );
    }
}
