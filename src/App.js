import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <Title />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))