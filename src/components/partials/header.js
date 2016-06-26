import React, { Component } from 'react';
import { assign } from 'lodash';

export default class Header extends Component {
    render() {
        const styles = {
        };

        return (
            <div>
                <div>Cungen</div>
                <ul>
                    <li>About</li>
                    <li>Articles</li>
                    <li>
                        <Popover open={this.state.activePopover === 'pop'}
                                 anchorEl={this.state.anchorEl}
                                 anchorOrigin={anchorOrigin}
                                 targetOrigin={targetOrigin}
                                 onRequestClose={this.closePopover.bind(this, 'pop')} >
                            <AppList />
                        </Popover>
                    </li>
                </ul>
            </div>
        )
    }
}