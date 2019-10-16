import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>My app with a form</h1>
        <Form />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))