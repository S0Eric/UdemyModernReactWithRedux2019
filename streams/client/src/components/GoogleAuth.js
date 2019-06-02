import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '688443580762-a2364qk95f1g58ge9551bmsvgcr5heep.apps.googleusercontent.com'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn)
      this.props.signIn(this.auth.currentUser.get().getId());
    else
      this.props.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null)
      return null;
    else if (this.props.isSignedIn)
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

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
