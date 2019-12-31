import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component{
    constructor(){
        super();
        this.state = {
            nome: ""
        };
        this.onChange = (ev) => {

        }
    }
    render(){
        return(
            <div>
                Nome: <input name="nome" type="text" />
            </div>
        );
    }
}

export default Input;