import React, { Component } from 'react';
import Colors from 'material-ui/lib/styles/colors';
import { List, ListItem, ListDivider } from 'material-ui/lib/lists/index';
import Paper from 'material-ui/lib/paper';
import Tags from '../components/tags/tags';

export default class Categories extends Component {
    render() {
        const styles = {
            root: {
                width: 256
            }
        };

        return (
            <div style={styles.root}>
                <Paper>
                    <List subheader="Nested List Items" style={styles.list}>
                        <ListItem primaryText="Poems" />
                        <ListItem primaryText="Sent mail" rightIcon={<div style={{lineHeight: '28px'}}>234</div>} />
                        <ListItem
                            primaryText="Inbox"
                            initiallyOpen={true}
                            nestedItems={[
                                <ListItem primaryText="Starred" />,
                                <ListItem primaryText="Sent Mail"/>
                            ]}
                        />
                    </List>
                </Paper>

                <Paper style={{marginTop: 16, padding: '8px 0'}}>
                    <div style={{color: Colors.lightBlack, padding: '8px 16px', fontSize: '14px', fontWeight: 'bold'}}>SubTitle</div>
                    <div style={{padding: '0 8px'}}>
                        <Tags data={['bb', 'cc', 'dd']} />
                    </div>
                </Paper>
            </div>
        );
    };
};
