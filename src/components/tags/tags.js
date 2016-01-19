import React, { Component } from 'react';
import Colors from 'material-ui/lib/styles/colors';
import TouchRipple from 'material-ui/lib/ripples/touch-ripple';

export default class Tag extends Component {
    static defaultProps = {
        ...Component.defaultProps,
        tags: ['tag1', 'tag2']
    };

    render() {
        const { data } = this.props;

        const styles = {
            root: {
                display: 'inline-block',
                lineHeight: '30px'
            },
            item: {
                position: 'relative',
                display: 'inline-block',
                padding: '0 8px',
                color: Colors.red500
            }
        };
        return (
            <div style={styles.root}>
                {data.map((item, index) => {
                    return (
                        <span style={styles.item} key={index}>
                            <TouchRipple>{item}</TouchRipple>
                        </span>
                    );
                })}
            </div>
        );
    };
};
