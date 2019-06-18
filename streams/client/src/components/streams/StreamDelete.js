import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button className="ui button negative" onClick={() => this.props.deleteStream(id)}>Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream)
      return 'Are you sure you want to delete this stream?';

    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }

  render() {
    console.log(this.props);
    if (this.props.isSignedIn === false)
      history.push('/');

    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    stream: state.streams[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
