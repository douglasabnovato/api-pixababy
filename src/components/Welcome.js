import React from 'react';

class Welcome extends React.Component {
    render() {
      return <h3>Hello, {this.props.name}</h3>;
    }
}

export default Welcome;