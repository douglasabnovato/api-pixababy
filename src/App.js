import React, { Component } from 'react';

class MyButton extends Component{
  render(){
    return <button>Click Me</button>
  }
}

class MyLabel extends Component{
  render(){
    return <p>Hello World from component.</p>
  }
}

class App extends Component{
  render(){
    return(
      <div className="App">
        <MyLabel />
        <MyButton />
      </div>
    );
  }
}

export default App;
