import styles from './app-list.css';
import React, { Component } from 'react';
import Colors from 'material-ui/lib/styles/colors';
import ActionDashboard from 'material-ui/lib/svg-icons/action/dashboard';
import ActionLoyalty from 'material-ui/lib/svg-icons/action/loyalty';
import ImageStyle from 'material-ui/lib/svg-icons/image/style';
import ImagePalette from 'material-ui/lib/svg-icons/image/palette';
import TouchRipple from 'material-ui/lib/ripples/touch-ripple';

export default class AppList extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.item}>
                    <TouchRipple color={Colors.teal200}>
                        <ActionDashboard color={Colors.teal200} style={{width: 42, height: 56}}/>
                        <span>小窝</span>
                    </TouchRipple>
                </div>
                <div className={styles.item}>
                    <TouchRipple color={Colors.pink200}>
                        <ActionLoyalty color={Colors.pink200} style={{width: 42, height: 56}}/>
                        <span>微语</span>
                    </TouchRipple>
                </div>
                <div className={styles.item}>
                    <TouchRipple color={Colors.cyan200}>
                        <ImageStyle color={Colors.cyan200} style={{width: 42, height: 56}}/>
                        <span>片段</span>
                    </TouchRipple>
                </div>
                <div className={styles.item}>
                    <TouchRipple color={Colors.indigo200}>
                        <ImagePalette color={Colors.indigo200} style={{width: 42, height: 56}}/>
                        <span>世外</span>
                    </TouchRipple>
                </div>
            </div>
        );
    };
};
