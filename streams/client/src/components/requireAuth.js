import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';

export default ChildComponent => {
  class ComposedComponent extends Component {
    checkAuth() {
      if (this.props.isSignedIn === false)
        history.push('/');
    }

    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    render () {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { isSignedIn: state.auth.isSignedIn };
  }

  return connect(mapStateToProps)(ComposedComponent);
}
