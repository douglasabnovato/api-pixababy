import React from 'react';
import ReactDOM from 'react-dom';

import Tela from './components/Tela';
import App from './components/App';
import Formulario from './components/Formulario';
import Welcome from './components/Welcome';

ReactDOM.render(
    <div>
        <Welcome name="douglas novato" />
        <Tela />
        <App />
        <Formulario />
    </div>,     
    document.getElementById('root')
); 
