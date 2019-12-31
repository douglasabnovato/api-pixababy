import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = (props) => (
    <div>
        <h3>Hello {props.name}.</h3>        
    </div>
);

class Hello extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            nome: "Douglas",
            numero: 0
        };
        this.addCont = this.addCont.bind(this);
    }

    addCont(){
        const contagem = this.state.numero;
        this.setState({ numero: contagem + 1});
    }

    render(){
        return(
            <div>
                <HelloWorld name={this.state.nome} /><br/>
                { this.state.numero }<br/>
                <button onClick={this.addCont.bind(this)}>+</button>
            </div>            
        );
    }
}

export default Hello;