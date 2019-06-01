// Import the react and react DOM libraries.
import React from 'react';
import ReactDOM from 'react-dom';

const getButtonText = () => "Click!!";
const style = { backgroundColor: 'blue', color: 'white' };

// Create a react component.
const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">Enter name: </label>
      <input id="name" type="text" />
      <button style={style}>
        {getButtonText()}
      </button>
    </div>
  );
}

// Take the react component and show it.
ReactDOM.render(<App />, document.querySelector('#root'));
