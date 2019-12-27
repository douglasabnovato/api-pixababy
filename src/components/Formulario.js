import React from 'react';

export default class Formulario extends React.Component {
  
    render() {
      return (
        <form>
          <p>
            <label>
            Nome: 
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Enviar" />
          </p>
        </form>
      );
    }
  }