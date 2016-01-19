import React, { Component } from 'react';
import Colors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';
import ActionPets from 'material-ui/lib/svg-icons/action/pets';
import ActionLoyalty from 'material-ui/lib/svg-icons/action/loyalty';
import Avatar from 'material-ui/lib/avatar';
import { Card, CardActions, CardExpandable, CardHeader, CardText } from 'material-ui/lib/card/index';
import { List, ListDivider, ListItem } from 'material-ui/lib/lists/index';

import Tags from '../tags/tags';

export default class Post extends Component {
    render() {
        const styles = {
            root: {
                width: 800,
                margin: '0 auto'
            },
            date: {
                float: 'left',
                display: 'inline-block',
                padding: '20px 3px',
                backgroundColor: Colors.pink50,
                color: Colors.grey700,
                writingMode: 'vertical-lr',
                transform: 'rotate(180deg)',
                '-webkit-writing-mode': 'vertical-lr'
            }
        };
        return (
            <div style={styles.root}>
                <Card style={{marginBottom: 16}}>
                    <CardHeader
                        title='Title'
                        subtitle='Subtitle'
                        avatar={<Avatar icon={<ActionLoyalty />} />}>
                    </CardHeader>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <Tags data={ ['aa', 'bb'] } />
                    </CardActions>
                </Card>
                <Card>
                    <CardHeader
                        title='Title'
                        subtitle='Subtitle'
                        avatar={<Avatar icon={<ActionLoyalty />} />}>
                    </CardHeader>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <Tags data={ ['aa', 'bb'] } />
                    </CardActions>
                </Card>
            </div>
        );
    };
};
