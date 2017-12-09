import React from 'react';
import ReactDOM from 'react-dom';

import FormContainer from './components/FormContainer.js';

import './../sass/style.scss';

class App extends React.Component {
  render() {
    return (
      <FormContainer />
    )
  }
}

let root = document.querySelector("#root");

ReactDOM.render(<App />, root);
