import React from 'react';
import ReactDOM from 'react-dom';

import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { phase: 'INI' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      pos => this.setState({ phase: 'POS', lat: pos.coords.latitude }),
      err => this.setState({ phase: 'ERR', errorMessage: err.message })
    );
  }

  getContent() {
    switch (this.state.phase) {
      case 'INI':
        return <Loader><h1>Getting your location (please accept)...</h1></Loader>;
      case 'POS':
        return <SeasonDisplay lat={this.state.lat} />;
      case 'ERR':
        return <p>{this.state.errorMessage}</p>;
      default:
        return <p>Internal error: invalid phase '{this.state.phase}'.</p>;
    }
  }

  render() {
    return (
      <div className="border red">
        { this.getContent() }
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
