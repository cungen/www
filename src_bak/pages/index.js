import React, { Component } from 'react';
import { render } from 'react-dom';
import Post from '../components/posts/post';
import Cate from '../categories/categories';

export default class Index extends Component {
    render() {
        const styles = {
            root: {
                paddingTop: 16,
                width: 800,
                margin: '0 auto'
            },
            content: {
                float: 'left',
                width: 550
            },
            aside: {
                float: 'right',
                width: 240
            }
        };
        return (
            <div style={styles.root}>
                <div style={styles.content}>
                    <Post />
                </div>
                <div style={styles.aside}>
                    <Cate />
                </div>
            </div>
        );
    }
};
