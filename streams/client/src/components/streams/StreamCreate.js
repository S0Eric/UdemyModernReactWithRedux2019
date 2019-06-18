import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import history from '../../history';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  }

  render() {
    if (this.props.isSignedIn === false)
      history.push('/');

    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { createStream })(StreamCreate);
