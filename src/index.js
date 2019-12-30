import React from 'react';
import ReactDOM from 'react-dom';

import Tela from './components/Tela';
import App from './App';
import Formulario from './components/Formulario';
import Welcome from './components/Welcome';
import Comment from './components/Comment';
import Clock from './components/Clock';
import Toti from './components/Toti';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

ReactDOM.render(
    <div>
        <Welcome name="douglas novato" />
        <Tela />        
        <Formulario />
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
        />
        <Clock />
        <Toti />
        <App />
    </div>,     
    document.getElementById('root')
); 
