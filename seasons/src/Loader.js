import React from 'react';

const Loader = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        { props.children }
      </div>
    </div>
  );
}

Loader.defaultProps = {
  children: 'Loading...'
}

export default Loader;
