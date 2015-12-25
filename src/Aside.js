import React, { Component } from 'react';

import { List, ListDivider, ListItem } from 'material-ui/lib/lists';

import Paper from 'material-ui/lib/paper'
import IconButton from 'material-ui/lib/icon-button'

import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ImageStyle from 'material-ui/lib/svg-icons/image/style';

export default class Aside extends Component {
    render() {
        const styles = {
            aside: {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: '256px',
                overflow: 'auto'
            },
            main: {
                position: 'absolute',
                top: 0,
                left: 256,
                right: 0,
                bottom: 0
            },
            list: {
                marginBottom: '48px'
            },
            opt: {
                position: 'absolute',
                bottom: 0
            }
        };

        return (
            <div>
                <div style={styles.aside}>
                    <List subheader="Nested List Items" style={styles.list}>
                        <ListItem primaryText="Poems" leftIcon={<ImageStyle />}/>
                        <ListItem primaryText="Sent mail" leftIcon={<ContentDrafts />}/>
                        <ListItem
                            primaryText="Inbox"
                            leftIcon={<ContentInbox />}
                            initiallyOpen={true}
                            nestedItems={[
                            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />,
                            <ListItem
                                primaryText="Sent Mail"
                                leftIcon={<ContentSend />}
                                nestedItems={[
                                    <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                                ]}
                            />
                        ]}
                        />
                    </List>
                    <div style={styles.opt}>
                        <IconMenu iconButtonElement={
                        <IconButton><ContentAdd /></IconButton>
                        } openDirection="top-right" desktop={true}>
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>
                    </div>
                </div>
                <Paper style={styles.main}>

                </Paper>
            </div>
        );
    }
}
