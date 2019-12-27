import React from 'react';

export default class InputField extends React.Component {
    handleChange(e) {
      const { type } = this.props
      const { value } = e.target
  
      if (type === 'email')
          this.validateEmail(value)
      } else if (type === 'url')
          this.validateUrl(value)
      }
    }
  
    render() {
      const { type } = this.props
      return (
        <input  
          onChange={::this.handleChange} 
          type={type}
        />
      );
    }
  }