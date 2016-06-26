import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/addon/dialog/dialog.css';
import '../../node_modules/codemirror/theme/mdn-like.css';

import React, { Component } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/vim';

export default class Editor extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const editorConfig = {
            lineNumbers: true,
            mode: 'markdown',
            keyMap: 'vim',
            matchBrackets: true,
            showCursorWhenSelecting: true,
            styleActiveLine: true,
            theme: 'mdn-like'
        };

        const editor = CodeMirror(this.refs.editor, editorConfig);

        CodeMirror.commands.save = function() {
            console.log('saving');
        };
    }

    render() {
        return (
            <div ref='editor'></div>
        );
    }
}
