import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '688443580762-a2364qk95f1g58ge9551bmsvgcr5heep.apps.googleusercontent.com'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(s => this.setState({ isSignedIn: s }));
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null)
      return null;
    else if (this.state.isSignedIn)
      return (
        <button onClick={this.auth.signOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    else
      return (
        <button onClick={this.auth.signIn} className="ui red google button">
          <i className="google icon" />
          Google Sign In
        </button>
      );
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

export default GoogleAuth;
