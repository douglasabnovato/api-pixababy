import React from 'react';

export default class Formulario extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
      alert('Um nome foi enviado: ' + this.state.value);
      event.preventDefault();
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
            Nome digitado: {this.state.value}<br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Enviar" />
          </p>
        </form>
      );
    }
  }