import c from './posts.sass';
import React, { Component } from 'react';

export default class Posts extends Component {
    render() {
        const posts = [{
            title: 'Mini Magazine Template!!',
            date: '2015-10-01',
            summary: 'A beautiful blogger template which is free to use with great features like mega menu and responsive design. Mega menu will fetch new blog posts and display it properly. The theme is well optimized for seo ranking and has ad layouts to easily ad your ads.',
            tags: ['blogger', 'template']
        }, {
            title: 'Mini Magazine Template!!',
            date: '2015-10-01',
            summary: 'A beautiful blogger template which is free to use with great features like mega menu and responsive design. Mega menu will fetch new blog posts and display it properly. The theme is well optimized for seo ranking and has ad layouts to easily ad your ads.',
            tags: ['blogger', 'template']
        }, {
            title: 'Mini Magazine Template!!',
            date: '2015-10-01',
            summary: 'A beautiful blogger template which is free to use with great features like mega menu and responsive design. Mega menu will fetch new blog posts and display it properly. The theme is well optimized for seo ranking and has ad layouts to easily ad your ads.',
            tags: ['blogger', 'template']
        }];
        return (
            <div className={c.root}>
                {
                    _.map(posts, function(post, key) {
                        return (
                            <div className={c.post} key={key}>
                                <div className={c.title}><b>#</b><a href="">{post.title}</a></div>
                                <div className={c.date}>{post.date}</div>
                                <div className={c.summary}>{post.summary}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
