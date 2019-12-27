import React, { Component } from 'react';

class MyLabel extends Component{
    render(){
        return ( 
            <p> Cliquei no: {this.props.text} </p>
        );
    }
}

class MyButton extends Component{
    render(){
        return (
            <button 
                onClick={() => {this.props.handleClick(this.props.label); }}
            >
                {this.props.label}
            </button>
        );
    }
}

class Tela extends Component{

    constructor(props){
        super(props);
        this.state = {
            labelText: '',
        };
    }

    setLabelText = (labelText) => {
        this.setState({labelText});
    }

    render(){

        return (
            <div className="App">
                <MyLabel text={this.state.labelText}/>
                <MyButton handleClick={this.setLabelText} label="Botão A"/>
                <MyButton handleClick={this.setLabelText} label="Botão B"/>
                <MyButton handleClick={this.setLabelText} label="Botão C"/>
                <MyButton handleClick={this.setLabelText} label="Botão D"/>
            </div>
        );
    }
}

export default Tela;