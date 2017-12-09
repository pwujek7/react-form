import React from 'react';
import ReactDOM from 'react-dom';

import './../sass/style.scss';

class App extends React.Component {
  render() {
    return (
      <div />
    )
  }
}

let root = document.querySelector("#root");

ReactDOM.render(<App />, root);
