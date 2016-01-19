import React, { Component } from 'react';
import { render } from 'react-dom';
import Post from '../components/posts/post';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Post></Post>
            </div>
        );
    }
};
