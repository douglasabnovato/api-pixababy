import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component{
    constructor(){
        super();
        this.state = {
            nome: ""
        };
        this.onChange = (ev) => {
            this.setState({nome: ev.target.value});
        }
    }
    render(){
        return(
            <div>
                Nome: <input 
                            name="nome" 
                            value={ this.state.nome }
                            onChange={ this.onChange }
                            type="text" />Hello {this.state.nome}
            </div>
        );
    }
}

export default Input;