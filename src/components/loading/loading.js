import style from './loading.css';
import React, { Component } from 'react';

export default class Loading extends Component {
    render() {
        return (
            <div className={style.root}>
                <div className={style['loading-box']}>
                    <div className={style['gear-top']}>
                        <div className={style['gear-tooth']}></div>
                        <div className={style['gear-tooth']}></div>
                        <div className={style['gear-tooth']}></div>
                        <div className={style['gear-center']}></div>
                    </div>
                    <div className={style['gear-left']}>
                        <div className={style['gear-tooth']}></div>
                        <div className={style['gear-tooth']}></div>
                        <div className={style['gear-tooth']}></div>
                        <div className={style['gear-center']}></div>
                    </div>
                    <div className={style['gear-right']}>
                        <div className={style['gear-tooth']}></div>
                        <div className={style['gear-tooth']}></div>
                        <div className={style['gear-tooth']}></div>
                        <div className={style['gear-center']}></div>
                    </div>
                </div>
                <div className={style['loading-text']}>
                    <span>L</span>
                    <span>o</span>
                    <span>a</span>
                    <span>d</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                </div>
            </div>
        );
    };
};
