import React from 'react';
import ReactDOM from 'react-dom';

import Tela from './components/Tela';
import App from './App';
import Formulario from './components/Formulario'

ReactDOM.render(
    <div>
        <Tela />
        <App />
        <Formulario />
    </div>,     
    document.getElementById('root')
); 